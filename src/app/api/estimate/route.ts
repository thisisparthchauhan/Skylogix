import { NextResponse } from "next/server";
import { z } from "zod";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

// Initialize Resend - Mover to handler to avoid build errors
// const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Redis 
// Note: We use a try-catch for Redis initialization to allow the app to build even if env vars are missing
let redis: Redis | null = null;
try {
    if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
        redis = new Redis({
            url: process.env.UPSTASH_REDIS_REST_URL,
            token: process.env.UPSTASH_REDIS_REST_TOKEN,
        });
    }
} catch (e) {
    console.error("Redis initialization failed:", e);
}

// Validation Schema
const estimateSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    company: z.string().optional(),
    phone: z.string().optional(),
    service: z.string(),
    platform: z.string(),
    features: z.array(z.string()),
    timeline: z.string(),
    estimateLow: z.number(),
    estimateHigh: z.number(),
    budgetRange: z.string(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // 1. Validation
        const result = estimateSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { success: false, error: result.error.issues[0].message },
                { status: 400 }
            );
        }

        const data = result.data;

        // 2. Rate Limiting (if Redis is available)
        if (redis) {
            // Get IP address
            const forwardedFor = req.headers.get("x-forwarded-for");
            const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

            const rateLimitKey = `rate_limit:estimate:${ip}`;

            // Check current count
            const currentCount = await redis.get<number>(rateLimitKey);

            if (currentCount && currentCount >= 3) {
                return NextResponse.json(
                    { success: false, error: "Too many requests. Please try again later." },
                    { status: 429 }
                );
            }

            // Increment and expire
            await redis.incr(rateLimitKey);
            await redis.expire(rateLimitKey, 3600); // 1 hour
        }

        // 3. Send Admin Notification
        const adminEmailContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #4F8EF7;">🚀 New Project Estimate</h2>
                <div style="background-color: #f4f6f8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <p><strong>Service:</strong> ${data.service}</p>
                    <p><strong>Budget Range:</strong> <span style="font-size: 18px; font-weight: bold; color: #2d3748;">${data.budgetRange}</span></p>
                </div>
                
                <h3>Client Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.email}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.company || "-"}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.phone || "-"}</td></tr>
                </table>

                <h3>Project Specs</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Platform:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.platform}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Timeline:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.timeline}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Features:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.features.join(", ") || "None"}</td></tr>
                </table>
            </div>
        `;

        // Initialize Resend
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: process.env.FROM_EMAIL || "Skylogix Estimator <noreply@skylogix.tech>",
            to: process.env.TO_EMAIL || "contact@skylogix.tech",
            subject: `🚀 New Project Estimate — ${data.service} — ${data.budgetRange}`,
            html: adminEmailContent,
        });

        // 4. Send User Auto-reply
        const userEmailContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                <h2 style="color: #4F8EF7; text-align: center;">Your Estimate is Ready!</h2>
                
                <p>Hi ${data.name.split(" ")[0]},</p>
                <p>Thank you for using the Skylogix Project Estimator. Here is the summary of your estimated project cost:</p>
                
                <div style="background-color: #0A0F2C; color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 20px 0;">
                    <p style="margin: 0; opacity: 0.8; font-size: 14px;">ESTIMATED RANGE</p>
                    <h1 style="margin: 10px 0; font-size: 36px; color: #4F8EF7;">${data.budgetRange}</h1>
                    <p style="margin: 0; font-size: 14px; opacity: 0.8;">${data.service} • ${data.timeline} Timeline</p>
                </div>

                <h3>What happens next?</h3>
                <ol style="line-height: 1.6;">
                    <li><strong>Review:</strong> Our team will review your requirements within 24 hours.</li>
                    <li><strong>Consultation:</strong> We'll reach out to schedule a free 30-min strategy call.</li>
                    <li><strong>Proposal:</strong> You'll receive a formal proposal and timeline.</li>
                </ol>

                <p style="margin-top: 30px; font-size: 14px; color: #666; text-align: center;">
                    Questions? Reply to this email or visit <a href="https://skylogix.tech" style="color: #4F8EF7;">skylogix.tech</a>
                </p>
                
                <div style="text-align: center; margin-top: 20px;">
                    <a href="https://www.linkedin.com/company/skylogix-technologies" style="display: inline-block; padding: 10px 20px; background-color: #0077b5; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Connect on LinkedIn</a>
                </div>
            </div>
        `;

        await resend.emails.send({
            from: process.env.FROM_EMAIL || "Skylogix Team <contact@skylogix.tech>",
            to: data.email,
            subject: "Your Skylogix Project Estimate is Ready!",
            html: userEmailContent,
        });

        return NextResponse.json({ success: true, message: "Estimate sent successfully!" });

    } catch (error: any) {
        console.error("Estimate API Error:", error);
        return NextResponse.json(
            { success: false, error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
