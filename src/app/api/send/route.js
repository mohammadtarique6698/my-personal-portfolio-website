// import nodemailer from 'nodemailer';

// export const runtime = 'nodejs';
// export const maxDuration = 10; // ✅ tell Vercel to allow SMTP time

// export async function POST(req) {
//   try {
//     const { email, subject, message } = await req.json();

//     console.log('📩 Incoming mail:', { email, subject });

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     // ❌ REMOVE transporter.verify() — slows & breaks mobile reliability

//     await transporter.sendMail({
//       from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
//       to: process.env.GMAIL_USER,
//       replyTo: email,
//       subject: `New Portfolio Message: ${subject}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//           <h2 style="color: #6d28d9;">📩 New Mail from the Portfolio website</h2>

//           <table style="border-collapse: collapse; margin-bottom: 16px;">
//             <tr>
//               <td style="padding: 6px 12px; font-weight: bold;">From</td>
//               <td style="padding: 6px 12px;">${email}</td>
//             </tr>
//             <tr>
//               <td style="padding: 6px 12px; font-weight: bold;">Subject</td>
//               <td style="padding: 6px 12px;">${subject}</td>
//             </tr>
//             <tr>
//               <td style="padding: 6px 12px; font-weight: bold;">Received</td>
//               <td style="padding: 6px 12px;">${new Date().toLocaleString()}</td>
//             </tr>
//           </table>

//           <hr style="border-top: 1px solid #e5e7eb; margin: 16px 0;" />

//           <h3>Message</h3>
//           <p style="white-space: pre-wrap;">${message}</p>

//           <hr style="border-top: 1px solid #e5e7eb; margin: 24px 0;" />

//           <p style="font-size: 13px; color: #6b7280;">
//             Reply directly to this email to respond to <strong>${email}</strong>.
//           </p>
//         </div>
//       `,
//     });

//     console.log('✅ Mail sent successfully');

//     return Response.json({ success: true });
//   } catch (err) {
//     console.error('❌ Mail error:', err);
//     return Response.json(
//       { error: err.message || 'Mail failed' },
//       { status: 500 }
//     );
//   }
// }



// import nodemailer from 'nodemailer';

// export const runtime = 'nodejs';

// export async function POST(req) {
//   try {
//     const { email, subject, message } = await req.json();

//     console.log('📩 Incoming mail:', { email, subject });

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     console.log('🔐 Authenticating SMTP...');

//     await transporter.verify(); // 🔴 THIS WILL TELL THE TRUTH

//     console.log('✅ SMTP verified');

//     await transporter.sendMail({
//       from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
//       to: process.env.GMAIL_USER,
//       replyTo: email,
//       subject: `New Portfolio Message: ${subject}`,
//       html: `
//     <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      
//       <h2 style="color: #6d28d9;">📩 New Mail from the Portfolio website</h2>

//       <table style="border-collapse: collapse; margin-bottom: 16px;">
//         <tr>
//           <td style="padding: 6px 12px; font-weight: bold;">From</td>
//           <td style="padding: 6px 12px;">${email}</td>
//         </tr>
//         <tr>
//           <td style="padding: 6px 12px; font-weight: bold;">Subject</td>
//           <td style="padding: 6px 12px;">${subject}</td>
//         </tr>
//         <tr>
//           <td style="padding: 6px 12px; font-weight: bold;">Received</td>
//           <td style="padding: 6px 12px;">${new Date().toLocaleString()}</td>
//         </tr>
//       </table>

//       <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />

//       <h3 style="margin-bottom: 8px;">Message</h3>
//       <p style="white-space: pre-wrap;">
//         ${message}
//       </p>

//       <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

//       <p style="font-size: 13px; color: #6b7280;">
//         Reply directly to this email to respond to <strong>${email}</strong>.
//       </p>
//     </div>
//   `,
//     });
//     console.log('✅ Mail sent successfully');

//     // await transporter.sendMail({
//     //   from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
//     //   to: process.env.GMAIL_USER,
//     //   replyTo: email,
//     //   subject,
//     //   html: `<p>${message}</p>`,
//     // });

//     return Response.json({ success: true });
//   } catch (err) {
//     console.error('❌ Mail error:', err);
//     return Response.json(
//       { error: err.message || 'Mail failed' },
//       { status: 500 }
//     );
//   }
// }

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
