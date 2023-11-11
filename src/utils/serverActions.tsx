"use server";

import { FormData, schema } from "@config/formValidation";

export const handleContactFormSubmit = async (data: FormData) => {
  "use server";

  try {
    const validatedData = await schema.validate(data, { abortEarly: false });

    return {
      statusCode: 200,
      headers: {
        Location: "/",
        message: "success",
      },
    };
  } catch (errors) {
    return {
      statusCode: 400,
      headers: {
        Location: "/kontakt",
        message: "One or more issue has been found: " + errors,
      },
    };
  }
};
