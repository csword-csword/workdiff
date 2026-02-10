import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const linkedin = formData.get('linkedin') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File;

    // Convert resume to base64 for email attachment
    const resumeBuffer = await resume.arrayBuffer();
    const resumeBase64 = Buffer.from(resumeBuffer).toString('base64');

    // Prepare email content
    const emailContent = `
New Job Application Received

Position: Demand Generation Specialist

Applicant Information:
- Name: ${name}
- Email: ${email}
- LinkedIn: ${linkedin || 'Not provided'}

Cover Letter / AI Experience:
${coverLetter}

Resume attached as: ${resume.name}
    `.trim();

    // Send email using Resend API
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'careers@workdifferent.services',
        to: 'charles@workdifferent.services',
        subject: `New Application: ${name} - Demand Generation Specialist`,
        text: emailContent,
        attachments: [
          {
            filename: resume.name,
            content: resumeBase64,
          },
        ],
      }),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.text();
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}
