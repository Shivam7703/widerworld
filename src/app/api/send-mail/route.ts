import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// small helper so user-entered text can't break out of the HTML email
function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// turns "currentDesignation" -> "Current Designation" for the email table
function prettifyLabel(key: string) {
  const spaced = key.replace(/([a-z])([A-Z])/g, "$1 $2");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // formName: shown in the email subject, e.g. "Inquiry Form", "Evaluation Form"
    // data: the actual field values, whatever shape that particular form has
    const { formName, data } = body as {
      formName?: string;
      data?: Record<string, string>;
    };

    if (!data || typeof data !== "object" || Object.keys(data).length === 0) {
      return NextResponse.json({ error: "No form data received." }, { status: 400 });
    }

    const email = data.email;
    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    // basic email sanity check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false", // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // comma-separated list of 2-3 recipient emails in .env
    const toEmails = (process.env.INQUIRY_TO_EMAILS || "")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    if (toEmails.length === 0) {
      console.error("INQUIRY_TO_EMAILS is not set in .env");
      return NextResponse.json(
        { error: "Server email is not configured." },
        { status: 500 }
      );
    }

    // message/textarea fields get their own paragraph below the table, rest go into rows
    const longFieldKeys = ["message", "notes", "description"];
    const hasValue = (v: string) => v !== undefined && v !== null && v !== "";

    const rows = Object.entries(data)
      .filter(([key]) => !longFieldKeys.includes(key))
      .map(
        ([key, value]) =>
          `<tr><td><strong>${escapeHtml(prettifyLabel(key))}</strong></td><td>${escapeHtml(
            value || "-"
          )}</td></tr>`
      )
      .join("");

    const longFieldsHtml = Object.entries(data)
      .filter(([key, value]) => longFieldKeys.includes(key) && hasValue(value))
      .map(
        ([key, value]) =>
          `<p><strong>${escapeHtml(prettifyLabel(key))}:</strong></p><p>${escapeHtml(
            value
          ).replace(/\n/g, "<br/>")}</p>`
      )
      .join("");

    await transporter.sendMail({
      from: `"Website Form" <${process.env.SMTP_USER}>`,
      to: toEmails, // nodemailer bhej dega sabko ek saath
      replyTo: email,
      subject: `New Submission — ${formName || "Website Form"}`,
      html: `
        <h2>New ${escapeHtml(formName || "Form")} Submission</h2>
        <table cellpadding="6" cellspacing="0" border="0">${rows}</table>
        ${longFieldsHtml}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("send-mail error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}