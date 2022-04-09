import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairArmField: React.FC<FormikProps<any>> = ({ ...props }) => {
  return <FormFieldLayout name={"arm"} label={"Arm"} {...props} />;
};
