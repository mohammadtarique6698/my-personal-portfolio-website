import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (err) {
      console.error('Invalid JSON from client');
      return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
        status: 400,
      });
    }

    if (!body) {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let { email, subject, message } = body;

    email = email?.trim().toLowerCase();
    subject = subject?.trim();
    message = message?.trim();

    if (!email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL],
      // reply_to: {
      //   email,
      // },
      subject,
      html: `
        <h2>New Message from Portfolio Website</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: 'Email service failed' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { email, subject, message } = await req.json();
//     if (!email || !subject || !message) {
//       return new Response(
//         JSON.stringify({ error: "Missing fields" }),
//         { status: 400 }
//       );
//     }
//     await resend.emails.send({
//       from: "Portfolio Contact Mail<onboarding@resend.dev>",
//       to: [process.env.CONTACT_EMAIL],
//       reply_to: email,
//       subject: subject,
//       html: `<h2>New Message from Portfolio Website</h2>
//               <p><strong>From:</strong> ${email}</p>
//               <p><strong>Message:</strong></p>
//               <p>${message}</p>`,
//     });
//     return new Response(
//       JSON.stringify({ success: true }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error(error);
//     return new Response(
//       JSON.stringify({ error: "Failed to send email" }),
//       { status: 500 }
//     );
//   }
// }
