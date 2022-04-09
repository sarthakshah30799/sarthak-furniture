import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairBackMaterialField: React.FC<FormikProps<any>> = ({
  ...props
}) => {
  return (
    <FormFieldLayout name={"backmaterial"} label={"Back Material"} {...props} />
  );
};
