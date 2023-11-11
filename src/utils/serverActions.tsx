"use server";

import nodemailer from "nodemailer";
import { FormData, schema } from "@config/formValidation";

export const handleContactFormSubmit = async (data: FormData) => {
  "use server";

  try {
    const validatedData = await schema.validate(data, { abortEarly: false });

    const email = await sendEmail(validatedData);

    return {
      statusCode: 200,
      headers: {
        message: "success",
      },
    };
  } catch (errors) {
    return {
      statusCode: 400,
      headers: {
        message: "One or more issue has been found: " + errors,
      },
    };
  }
};

const sendEmail = async (data: FormData) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: process.env.EMAIL, pass: process.env.PASSWORD },
  });

  const body = createHTMLBody(data);

  let mailOptions = {
    from: data.email,
    to: process.env.EMAIL,
    subject: `Wiadomość od ${data.name}`,
    html: body,
  };

  let info = await transporter.sendMail(mailOptions);

  return info;
};

const createHTMLBody = (data: FormData) => {
  const { name, businessName, email, client, phone, message } = data;

  return `
    <h1>Wiadomość od ${name}</h1>

    <p><b>Typ klienta:</b>  ${client === "customer" ? "Prywatny" : "Firma"}</p>
    ${businessName ? `<p><b>Nazwa firmy:</b>  ${businessName}</p>` : ""}
    <p><b>Adres e-mail:</b>  <a href="mailto:${email}">${email}</a></p>
    <p><b>Numer telefonu:</b>  <a href="tel:${phone}">${phone}</a></p>
    <br />
    <hr />
    <br />
    <h2>Wiadomość:</h2>
    <p>${message}</p>
  `;
};
