import { NextResponse } from "next/server";

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const RECIPIENT_PHONE_NUMBER = process.env.RECIPIENT_PHONE_NUMBER;

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message, originalQuestion } =
      await req.json();

    // Format the message for WhatsApp
    const whatsappMessage = `
*New Support Request from Webgrovia Website*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
💼 *Service Interested In:* ${service}

📝 *Message:*
${message}

❓ *Original Question:*
${originalQuestion}
    `.trim();

    // Send WhatsApp message using WhatsApp Cloud API
    const response = await fetch(
      `https://graph.facebook.com/v17.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: RECIPIENT_PHONE_NUMBER,
          type: "text",
          text: {
            body: whatsappMessage,
            preview_url: false,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send WhatsApp message");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    return NextResponse.json(
      { error: "Failed to send WhatsApp message" },
      { status: 500 }
    );
  }
}
