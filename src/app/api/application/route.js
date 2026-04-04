import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  try {
    const formData = await request.formData();

    const position = formData.get('position');
    const note = formData.get('note');
    const resume = formData.get('resume'); // File object or null

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'admin@mastermindsjunior.com',
    //   to: 'ayush.patel.code@gmail.com',
      cc: 'tanialuthra@mastermindsjunior.com',
      subject: `New Job Application — ${position}`,
      html: `
        <h2>New Application Received</h2>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Note:</strong></p>
        <p>${note || 'No note provided.'}</p>
      `,
      attachments: [],
    };

    if (resume && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      mailOptions.attachments.push({
        filename: resume.name,
        content: buffer,
        contentType: resume.type,
      });
    }

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: 'Application sent successfully.' });
  } catch (err) {
    console.error('Mail error:', err);
    return Response.json(
      { success: false, message: 'Failed to send application.' },
      { status: 500 }
    );
  }
}