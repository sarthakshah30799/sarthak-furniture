import React from "react";
import { ChairNameField } from "./fields";
import { Form } from "formik";
import { SubmitButton } from "../../form";

export const ChairCreateForm = ({ ...props }) => {
  return (
    <Form>
      <ChairNameField {...props} />
      <SubmitButton />
    </Form>
  );
};
