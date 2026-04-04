import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'marketing@mastermindsjunior.com',
    //   to: 'ayush.patel.code@gmail.com',
      subject: `New Contact Form Message — ${service || 'General'}`,
      html: `
        <h2>MMJ India site Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Mail error:', err);
    return Response.json(
      { success: false, message: 'Failed to send message.' },
      { status: 500 }
    );
  }
}