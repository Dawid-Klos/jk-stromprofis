import { string, bool, object, InferType } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = object({
  name: string().required("Name ist erforderlich").min(5, "Der Name ist zu kurz").max(25, "Der Name ist zu lang"),
  email: string().email("E-Mail Adresse ist falsch").required("Eine E-Mail Adresse ist erforderlich"),
  phone: string()
    .required("Eine Telefonnummer ist erforderlich")
    .matches(phoneRegExp, "Die Telefonnummer ist falsch und/oder enthält eine Vorwahl")
    .min(9, "Rufnummer zu kurz eingegeben")
    .max(11, "Die eingegebene Rufnummer ist zu kurz"),
  client: string().required("Der Kundentyp ist erforderlich"),
  businessName: string().when("client", {
    is: "business",
    then: (yup) => yup.required("Der Firmenname ist erforderlich"),
  }),
  message: string().required("Kurze Nachricht erforderlich").min(30, "Die Nachricht ist zu kurz"),
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
