import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid payload" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST!,
      port: Number(import.meta.env.SMTP_PORT || 465),
      secure: String(import.meta.env.SMTP_SECURE || "true") === "true",
      auth: {
        user: import.meta.env.SMTP_USER!,
        pass: import.meta.env.SMTP_PASS!,
      },
    });

    // 1) Email ke tim kamu
    await transporter.sendMail({
      from: import.meta.env.CONTACT_FROM || import.meta.env.SMTP_USER,
      to: import.meta.env.CONTACT_TO || import.meta.env.SMTP_USER,
      replyTo: `${name} <${email}>`,
      subject: `hrnow contact — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
      html: `
        <h2>New Contact - hrnow</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p style="white-space:pre-wrap;"><b>Message:</b>\n${message}</p>
      `,
    });

    // 2) Balasan otomatis ke user
    await transporter.sendMail({
      from: import.meta.env.CONTACT_FROM || import.meta.env.SMTP_USER,
      to: email,
      subject: "Terima kasih! Kami menerima pesan Anda — HRNow",
      text:
        `Halo ${name},\n\nTerima kasih sudah menghubungi HRNow.\n` +
        `Kami sudah menerima pesanmu dan akan membalas secepatnya.\n\n` +
        `Ringkasan:\nNama: ${name}\nEmail: ${email}\nTelepon: ${phone}\n\n` +
        `Pesan:\n${message}\n\nSalam,\nTim HRNow`,
      html: `
        <p>Halo <b>${name}</b>,</p>
        <p>Terima kasih sudah menghubungi <b>HRNow</b>. Kami sudah menerima pesanmu dan akan membalas secepatnya.</p>
        <p><b>Ringkasan</b><br/>
        Nama: ${name}<br/>Email: ${email}<br/>Telepon: ${phone}</p>
        <p><b>Pesan</b><br/>${String(message).replace(/\n/g, "<br/>")}</p>
        <p>Salam,<br/>Tim HRNow</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    console.error("CONTACT_API_ERROR", e);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
      status: 500,
    });
  }
};
