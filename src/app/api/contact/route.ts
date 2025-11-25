import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if environment variables are configured for real email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: 'saksham456456@gmail.com', // Receiver address (your email)
        replyTo: email,
        subject: `New Transmission from Portfolio: ${name}`,
        text: `
          --- INCOMING TRANSMISSION ---

          SENDER: ${name}
          CONTACT: ${email}

          MESSAGE:
          ${message}

          -----------------------------
          System: Online
          Timestamp: ${new Date().toISOString()}
        `,
        html: `
          <div style="font-family: monospace; background-color: #0a0f1c; color: #39a7ff; padding: 20px; border-radius: 10px;">
            <h2 style="color: #ffffff;">INCOMING TRANSMISSION</h2>
            <hr style="border-color: #39a7ff;">
            <p><strong style="color: #ffffff;">SENDER:</strong> ${name}</p>
            <p><strong style="color: #ffffff;">CONTACT:</strong> ${email}</p>
            <br>
            <p><strong style="color: #ffffff;">MESSAGE:</strong></p>
            <p style="color: #b0c4de; white-space: pre-wrap;">${message}</p>
            <br>
            <hr style="border-color: #39a7ff;">
            <p style="font-size: 12px; color: #555;">System Timestamp: ${new Date().toISOString()}</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('--- EMAIL SENT SUCCESSFULLY ---');
    } else {
      // Fallback simulation if credentials are missing
      console.log('--- SIMULATION MODE (No Credentials Found) ---');
      console.log('To enable real emails, set EMAIL_USER and EMAIL_PASS in .env.local');
      console.log('--- TRANSMISSION DATA ---');
      console.log(`From: ${name} <${email}>`);
      console.log(`Message: ${message}`);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    }

    return NextResponse.json(
      { message: 'Transmission received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact request:', error);
    return NextResponse.json(
      { error: 'Failed to process transmission' },
      { status: 500 }
    );
  }
}
