import { string, bool, object, InferType } from "yup";

export const schema = object({
  name: string().required("Name ist erforderlich").min(5, "Der Name ist zu kurz").max(25, "Der Name ist zu lang"),
  email: string().email("E-Mail Adresse ist falsch").required("Eine E-Mail Adresse ist erforderlich"),
  phone: string()
    .required("Eine Telefonnummer ist erforderlich")
    .min(6, "Rufnummer zu kurz eingegeben")
    .max(17, "Die eingegebene Rufnummer ist zu kurz"),
  client: string().required("Der Kundentyp ist erforderlich"),
  businessName: string().when("client", {
    is: "business",
    then: (yup) => yup.required("Der Firmenname ist erforderlich"),
  }),
  message: string().required("Kurze Nachricht erforderlich").min(10, "Die Nachricht ist zu kurz"),
  policy: bool().oneOf([true], "Sie müssen die Datenschutzbestimmungen akzeptieren."),
});

export const defaultValues = {
  name: "",
  email: "",
  phone: "",
  client: "",
  businessName: "",
  message: "",
  policy: false,
};

export type FormData = InferType<typeof schema>;
