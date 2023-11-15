import { FormData } from "@config/formValidation";

export const convertTitleToHref = (title: string): string => {
  return title.toLowerCase().replaceAll(" ", "-").replaceAll(",", "").replaceAll("/", "-");
};

export const createHtmlEmailBody = (data: FormData) => {
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
