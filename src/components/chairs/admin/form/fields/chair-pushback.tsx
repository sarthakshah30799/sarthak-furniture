import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairPushbackField: React.FC<FormikProps<any>> = ({
  ...props
}) => {
  return <FormFieldLayout name={"pushback"} label={"Pushback"} {...props} />;
};
