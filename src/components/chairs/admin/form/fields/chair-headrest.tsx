import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairHeadRestField: React.FC<FormikProps<any>> = ({
  ...props
}) => {
  return <FormFieldLayout name={"headrest"} label={"Head-rest"} {...props} />;
};
