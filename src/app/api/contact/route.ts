import { Resend } from "resend";
import { NextResponse } from "next/server";

// Force dynamic to prevent build-time execution
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
    try {
        // Check for API key first
        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is not configured");
            return NextResponse.json(
                { error: "Email service is not configured. Please try again later." },
                { status: 503 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL || "maerodriguezdev@gmail.com",
            replyTo: email,
            subject: subject || `New message from ${name}`,
            html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #101622; color: #ffffff; padding: 40px; border-radius: 16px;">
          <h1 style="color: #10b981; margin-bottom: 24px; font-size: 24px;">New Contact Form Submission</h1>
          
          <div style="background-color: #1a2333; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0;"><strong style="color: #10b981;">Name:</strong> ${name}</p>
            <p style="margin: 0 0 12px 0;"><strong style="color: #10b981;">Email:</strong> ${email}</p>
            ${subject ? `<p style="margin: 0 0 12px 0;"><strong style="color: #10b981;">Subject:</strong> ${subject}</p>` : ""}
          </div>
          
          <div style="background-color: #1a2333; padding: 24px; border-radius: 12px;">
            <p style="color: #10b981; margin: 0 0 12px 0; font-weight: bold;">Message:</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="margin-top: 24px; font-size: 12px; color: #64748b;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send email. Please try again." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, messageId: data?.id });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}
