"use client";
import { useState } from "react";
import { Controller } from "react-hook-form";

import Button from "@components/common/Button";
import { useFormLogic } from "@hooks/useFormLogic";
import { handleContactFormSubmit } from "@utils/serverActions";
import { FormData } from "@config/formValidation";

import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import { SubmitResult } from "./SubmitResult";

import styles from "./Form.module.scss";

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { control, watch, errors, handleSubmit } = useFormLogic();

  const isCompany = watch("client") === "business";

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      const res = await handleContactFormSubmit(data);

      if (res.statusCode === 200) {
        setIsFormSubmitted(true);
        setIsSuccess(true);
      }

      if (res.statusCode === 400) {
        setIsFormSubmitted(true);
        setIsSuccess(false);
      }
    } catch (error) {
      setIsFormSubmitted(false);
      setIsSuccess(false);
    }

    setIsLoading(false);
  };

  if (isFormSubmitted && !isLoading) {
    return <SubmitResult isSuccess={isSuccess} setIsFormSubmitted={setIsFormSubmitted} setIsSuccess={setIsSuccess} />;
  }

  return (
    <article className={styles.article}>
      <h2 className={styles.title}>Geben Sie Ihre Kontaktdaten ein.</h2>

      <form className={`${styles.form} ${isLoading && styles.opacity}`} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              type="text"
              label="Vor- und Nachname"
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
              label="E-mail"
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
              label="Telefonnummer"
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
            <Select
              isInvalid={!!errors.client}
              errorMessage={errors.client?.message}
              value={value}
              onChange={onChange}
            />
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
                label="Firmenname"
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

        <Button className={styles.button} element="button" variant="secondary" isLoading={isLoading}>
          Nachricht senden
        </Button>
      </form>
    </article>
  );
};
