import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairColorField: React.FC<FormikProps<any>> = ({ ...props }) => {
  return <FormFieldLayout name={"color"} label={"color"} {...props} />;
};
