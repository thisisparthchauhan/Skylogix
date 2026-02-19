import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory rate limiting (simple implementation for serverless)
// Note: In a real production scalable environment, use Redis (e.g., Upstash) for persistence.
const rateLimit = new Map<string, { count: number; lastTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

const spamKeywords = ["viagra", "casino", "lottery", "winner", "crypto investment"];

// const resend = new Resend(process.env.RESEND_API_KEY || "re_123");

export async function POST(req: NextRequest) {
    try {
        const ip = req.headers.get("x-forwarded-for") || "unknown";

        // 1. Rate Limiting
        const currentLimit = rateLimit.get(ip);
        const now = Date.now();

        if (currentLimit) {
            if (now - currentLimit.lastTime < RATE_LIMIT_WINDOW) {
                if (currentLimit.count >= MAX_REQUESTS) {
                    return NextResponse.json(
                        { error: "Too many requests. Please try again later." },
                        { status: 429 }
                    );
                }
                currentLimit.count++;
            } else {
                rateLimit.set(ip, { count: 1, lastTime: now });
            }
        } else {
            rateLimit.set(ip, { count: 1, lastTime: now });
        }

        const body = await req.json();
        const { name, email, message, company, phone, budget, service } = body;

        // 2. Validation
        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and Email are required." },
                { status: 400 }
            );
        }

        // 3. Spam Filter
        const content = (message || "") + (name || "") + (company || "");
        const isSpam = spamKeywords.some((keyword) =>
            content.toLowerCase().includes(keyword)
        );

        if (isSpam) {
            return NextResponse.json(
                { error: "Message flagged as spam." },
                { status: 400 }
            );
        }

        // 4. Send Email via Resend
        // Mocking email send if API key is not present for local dev without errors
        if (!process.env.RESEND_API_KEY) {
            console.log("Mock Email Sent:", body);
            return NextResponse.json({ success: true, message: "Mock email sent" });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL || "onboarding@resend.dev",
            to: process.env.TO_EMAIL || "contact@skylogix.tech",
            subject: `New Inquiry from ${name} - ${company || "Individual"}`,
            html: `
        <h2>New Lead Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Service Interest:</strong> ${service || "N/A"}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message || "No message provided."}</p>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return NextResponse.json(
                { error: "Failed to send email." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
