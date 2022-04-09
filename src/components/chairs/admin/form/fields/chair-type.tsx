import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairTypeField: React.FC<FormikProps<any>> = ({ ...props }) => {
  return <FormFieldLayout name={"type"} label={"Type"} {...props} />;
};
