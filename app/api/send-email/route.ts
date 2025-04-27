import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const toEmail = "hyyrofn2005@gmail.com" // Target email address

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return Response.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Email template
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Use your domain if you've set it up with Resend
      to: [toEmail],
      subject: `Portfolio Contact: ${subject}`,
      html: emailContent,
      reply_to: email,
    })

    if (error) {
      console.error("Error sending email:", error)
      return Response.json({ success: false, message: "Failed to send email" }, { status: 500 })
    }

    return Response.json({ success: true, message: "Email sent successfully", data })
  } catch (error) {
    console.error("Server error:", error)
    return Response.json({ success: false, message: "Server error" }, { status: 500 })
  }
}
