import { NextResponse } from "next/server";
import { headers } from "next/headers";
import crypto from "crypto";
import { z } from "zod";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// Environment variables
const CALENDLY_WEBHOOK_SECRET = process.env.CALENDLY_WEBHOOK_SECRET;
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const FROM_EMAIL = process.env.FROM_EMAIL || "Skylogix <hello@skylogix.tech>"; // Fallback

// Zod Schema for Calendly Payload (Partial)
const calendlyEventSchema = z.object({
    event: z.literal("invitee.created"),
    payload: z.object({
        email: z.string().email(),
        name: z.string(),
        questions_and_answers: z.array(
            z.object({
                question: z.string(),
                answer: z.string(),
            })
        ).optional(),
        scheduled_event: z.object({
            start_time: z.string(),
            end_time: z.string(),
            location: z.object({
                type: z.string(),
                location: z.string().optional(),
            }).optional(),
        }),
        timezone: z.string().optional(),
    }),
});

// Helper: Verify Calendly Signature
async function verifySignature(req: Request, body: string) {
    if (!CALENDLY_WEBHOOK_SECRET) {
        console.warn("Missing CALENDLY_WEBHOOK_SECRET");
        return true; // Bypass in dev if needed, or fail safe
    }

    const headerList = await headers();
    const signatureHeader = headerList.get("Calendly-Webhook-Signature");

    if (!signatureHeader) return false;

    const { t, signature } = signatureHeader.split(",").reduce((acc, part) => {
        const [key, value] = part.split("=");
        if (key === "t") acc.t = value;
        if (key === "v1") acc.signature = value;
        return acc;
    }, { t: "", signature: "" });

    if (!t || !signature) return false;

    const data = `${t}.${body}`;
    const hmac = crypto.createHmac("sha256", CALENDLY_WEBHOOK_SECRET);
    const digest = hmac.update(data).digest("hex");

    return digest === signature;
}

// Helper: Send Slack Notification
async function sendSlackNotification(data: any) {
    if (!SLACK_WEBHOOK_URL) return;

    const { name, email, scheduled_event, timezone, questions_and_answers } = data.payload;
    const startTime = new Date(scheduled_event.start_time).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short",
    });

    const questionsText = questions_and_answers
        ?.map((qa: any) => `*${qa.question}:*\n${qa.answer}`)
        .join("\n\n") || "No questions answered.";

    const message = {
        text: "📅 *NEW CALL BOOKED*",
        blocks: [
            {
                type: "header",
                text: {
                    type: "plain_text",
                    text: "📅 New Call Booked via Calendly",
                    emoji: true,
                },
            },
            {
                type: "section",
                fields: [
                    {
                        type: "mrkdwn",
                        text: `*Name:*\n${name}`,
                    },
                    {
                        type: "mrkdwn",
                        text: `*Email:*\n${email}`,
                    },
                    {
                        type: "mrkdwn",
                        text: `*Time (IST):*\n${startTime}`,
                    },
                    {
                        type: "mrkdwn",
                        text: `*Invitee Timezone:*\n${timezone || "Unknown"}`,
                    },
                ],
            },
            {
                type: "divider",
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Intake Answers:*\n\n${questionsText}`,
                },
            },
        ],
    };

    try {
        await fetch(SLACK_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(message),
        });
    } catch (error) {
        console.error("Slack Notification Error:", error);
    }
}

// Helper: Send Email via Resend
async function sendWelcomeEmail(data: any) {
    const { name, email, scheduled_event } = data.payload;
    const startTime = new Date(scheduled_event.start_time).toLocaleDateString("en-US", {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: FROM_EMAIL,
            to: email,
            subject: "See you soon! — Skylogix Technologies",
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>Hi ${name.split(" ")[0]},</h2>
                    <p>Thanks for booking a call! I'm looking forward to chatting with you on <strong>${startTime}</strong>.</p>
                    
                    <h3>Preparing for our call</h3>
                    <p>To make the most of our time, it would be helpful if you could have the following ready:</p>
                    <ul>
                        <li>A brief overview of your project or idea.</li>
                        <li>Any specific challenges you're facing.</li>
                        <li>A rough idea of your budget and timeline (if known).</li>
                    </ul>

                    <p>
                        📄 <strong><a href="#">Download Project Planning Checklist (PDF)</a></strong>
                    </p>

                    <h3>Need an NDA?</h3>
                    <p>We take confidentiality seriously. If you'd like us to sign a Non-Disclosure Agreement (NDA) before we talk, just reply to this email, and we'll get it sorted.</p>

                    <p>If you need to reschedule, you can do so via the link in your calendar invitation.</p>
                    
                    <br />
                    <p>Talk soon,</p>
                    <p><strong>The Skylogix Team</strong><br />
                    <a href="https://skylogix.tech">skylogix.tech</a></p>
                </div>
            `,
        });
    } catch (error) {
        console.error("Resend Email Error:", error);
    }
}

export async function POST(req: Request) {
    try {
        const bodyText = await req.text();

        // 1. Verify Signature
        const isValid = await verifySignature(req, bodyText);
        if (!isValid) {
            return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
        }

        const body = JSON.parse(bodyText);

        // 2. Filter for "invitee.created"
        if (body.event !== "invitee.created") {
            // Calendly sends other events like "invitee.canceled", just ignore them for now or log
            return NextResponse.json({ message: "Event ignored" }, { status: 200 });
        }

        // 3. Validate Payload Structure
        const result = calendlyEventSchema.safeParse(body);
        if (!result.success) {
            console.error("Validation Error:", result.error);
            return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
        }

        // 4. Async Actions
        await Promise.all([
            sendSlackNotification(result.data),
            sendWelcomeEmail(result.data),
        ]);

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Webhook Handler Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
