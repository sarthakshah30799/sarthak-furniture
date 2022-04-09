import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairPriceField: React.FC<FormikProps<any>> = ({ ...props }) => {
  return <FormFieldLayout name={"price"} label={"Price"} {...props} />;
};
