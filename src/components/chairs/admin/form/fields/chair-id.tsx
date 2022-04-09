import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairIdField: React.FC<FormikProps<any>> = ({ ...props }) => {
  return <FormFieldLayout name={"id"} label={"Chair Id"} {...props} />;
};
