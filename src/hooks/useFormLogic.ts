import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, FormData, defaultValues } from "@config/formValidation";

export const useFormLogic = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(errors, " Something went wrong");
    }
  };

  return { control, handleSubmit, errors, onSubmit, watch };
};
