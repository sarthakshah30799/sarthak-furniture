import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairNameField: React.FC<FormikProps<any>> = ({ ...props }) => {
  return (
    <FormFieldLayout name={"name"} type="text" label={"name"} {...props} />
  );
};
