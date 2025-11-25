import { NextResponse } from 'next/server';

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

    // Simulate sending email (delay)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log the message (mocking the transmission)
    console.log('--- TRANSMISSION RECEIVED ---');
    console.log(`From: ${name} <${email}>`);
    console.log(`Message: ${message}`);
    console.log('-----------------------------');

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
