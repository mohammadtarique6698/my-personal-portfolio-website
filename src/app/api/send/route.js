import { NextResponse } from "next/server";
import { Resend } from "resend";

const api = "re_ikVKXbg2_Nu1haehi541vC1z7PA1LTdav"
const resend = new Resend(api);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "mohammadtarique661998@gmail.com",
      to: [email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
