import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the contact form submission
    console.log("Contact form submission:", {
      timestamp: new Date().toISOString(),
      ...body,
    });

    // In production, you would:
    // 1. Send an email notification (using SendGrid, Resend, etc.)
    // 2. Store in a database
    // 3. Send to a CRM (like HubSpot, Salesforce)
    // 4. Send a Slack notification
    
    // For now, we just log and return success
    return NextResponse.json(
      { message: "Thank you for your message. I'll be in touch soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try emailing directly." },
      { status: 500 }
    );
  }
}

