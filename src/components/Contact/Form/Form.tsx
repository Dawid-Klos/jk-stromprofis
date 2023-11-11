"use client";

import { Controller } from "react-hook-form";

import Button from "@components/common/Button";
import { useFormLogic } from "@hooks/useFormLogic";
import { handleContactFormSubmit } from "@utils/serverActions";
import { FormData } from "@config/formValidation";

import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";

import styles from "./Form.module.scss";

export const Form = () => {
  const { control, watch, errors, handleSubmit } = useFormLogic();

  const isCompany = watch("client") === "business";

  const onSubmit = async (data: FormData) => {
    try {
      const res = await handleContactFormSubmit(data);

      if (res.statusCode === 200 && res.headers.message === "success") {
        console.log("Code: ", res.statusCode);
        console.log("Message: ", res.headers.message);
      } else {
        console.log("Code: ", res.statusCode);
        console.log("Message: ", res.headers.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input
            type="text"
            label="Imie i nazwisko"
            autoComplete="name"
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message}
            value={value}
            onChange={onChange}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input
            type="email"
            label="Email"
            autoComplete="email"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            value={value}
            onChange={onChange}
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input
            type="tel"
            label="Numer telefonu"
            autoComplete="tel-local"
            isInvalid={!!errors.phone}
            errorMessage={errors.phone?.message}
            value={value}
            onChange={onChange}
          />
        )}
      />

      <Controller
        name="client"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Select isInvalid={!!errors.client} errorMessage={errors.client?.message} value={value} onChange={onChange} />
        )}
      />

      {isCompany && (
        <Controller
          name="businessName"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              type="text"
              label="Nazwa firmy"
              autoComplete="organization"
              isInvalid={!!errors.businessName}
              errorMessage={errors.businessName?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />
      )}

      <Controller
        name="message"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Textarea
            isInvalid={!!errors.message}
            errorMessage={errors.message?.message}
            value={value}
            onChange={onChange}
          />
        )}
      />

      <Controller
        name="policy"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            isInvalid={!!errors.policy}
            errorMessage={errors.policy?.message}
            value={value}
            onChange={onChange}
          />
        )}
      />

      <Button className={styles.button} element="button" variant="secondary">
        Wyślij wiadomość
      </Button>
    </form>
  );
};
