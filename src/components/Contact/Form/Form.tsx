"use client";

import { Controller } from "react-hook-form";

import Button from "@components/common/Button";
import { useFormLogic } from "@hooks/useFormLogic";

import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";

import styles from "./Form.module.scss";

export const Form = () => {
  const { control, handleSubmit, onSubmit, errors } = useFormLogic();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input
            type="name"
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
