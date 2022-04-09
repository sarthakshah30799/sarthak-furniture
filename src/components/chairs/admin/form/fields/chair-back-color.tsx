import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairBackColorField: React.FC<FormikProps<any>> = ({
  ...props
}) => {
  return <FormFieldLayout name={"backcolor"} label={"Back-color"} {...props} />;
};
