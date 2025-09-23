import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const { name, email, phone, message } = await request.json();
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid payload" }),
        { status: 400 }
      );
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: Number("465"),
      secure: String("true") === "true",
      auth: {
        user: "peterhiku12@gmail.com",
        pass: "nlcvxgqmbzmpfwpw"
      }
    });
    await transporter.sendMail({
      from: "hrnow <peterhiku12@gmail.com>",
      to: "peterhiku12@gmail.com",
      replyTo: `${name} <${email}>`,
      subject: `hrnow contact — ${name}`,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone}

${message}`,
      html: `
        <h2>New Contact - hrnow</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p style="white-space:pre-wrap;"><b>Message:</b>
${message}</p>
      `
    });
    await transporter.sendMail({
      from: "hrnow <peterhiku12@gmail.com>",
      to: email,
      subject: "Terima kasih! Kami menerima pesan Anda — HRNow",
      text: `Halo ${name},

Terima kasih sudah menghubungi HRNow.
Kami sudah menerima pesanmu dan akan membalas secepatnya.

Ringkasan:
Nama: ${name}
Email: ${email}
Telepon: ${phone}

Pesan:
${message}

Salam,
Tim HRNow`,
      html: `
        <p>Halo <b>${name}</b>,</p>
        <p>Terima kasih sudah menghubungi <b>HRNow</b>. Kami sudah menerima pesanmu dan akan membalas secepatnya.</p>
        <p><b>Ringkasan</b><br/>
        Nama: ${name}<br/>Email: ${email}<br/>Telepon: ${phone}</p>
        <p><b>Pesan</b><br/>${String(message).replace(/\n/g, "<br/>")}</p>
        <p>Salam,<br/>Tim HRNow</p>
      `
    });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    console.error("CONTACT_API_ERROR", e);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
