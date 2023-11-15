"use server";

import nodemailer from "nodemailer";
import { FormData, schema } from "@config/formValidation";
import { createHtmlEmailBody } from "./functions";

export const handleContactFormSubmit = async (data: FormData) => {
  try {
    const validatedData = await schema.validate(data, { abortEarly: false });

    const email = await sendEmail(validatedData);

    return {
      statusCode: 200,
      headers: {
        message: "Email sent successfully",
        info: email,
      },
    };
  } catch (validationErrors) {
    return {
      statusCode: 400,
      headers: {
        message: "One or more issue has been found: " + validationErrors,
      },
    };
  }
};

const sendEmail = async (data: FormData) => {
  const transporter = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: 465,
    secure: true,
    auth: { user: process.env.EMAIL, pass: process.env.PASSWORD },
  });

  const body = createHtmlEmailBody(data);

  let mailOptions = {
    from: data.email,
    to: "info@jk-stromprofis.de",
    subject: `Wiadomość od ${data.name}`,
    html: body,
  };

  let info = await transporter.sendMail(mailOptions);

  return info;
};
