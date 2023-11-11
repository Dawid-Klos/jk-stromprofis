import { string, bool, object, InferType } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = object({
  name: string().required(),
  email: string().email().required(),
  phone: string().required().matches(phoneRegExp, "Phone number is not valid").min(8, "too short").max(9, "too long"),
  client: string().required(),
  message: string().required(),
  policy: bool().required(),
});

export const defaultValues = {
  name: "",
  email: "",
  phone: "",
  client: "",
  message: "",
  policy: false,
};

export type FormData = InferType<typeof schema>;
