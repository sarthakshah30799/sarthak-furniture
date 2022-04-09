import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairStandField: React.FC<FormikProps<any>> = ({ ...props }) => {
  return <FormFieldLayout name={"stand"} label={"Stand"} {...props} />;
};
