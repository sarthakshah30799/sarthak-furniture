import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairWheelField: React.FC<FormikProps<any>> = ({ ...props }) => {
  return <FormFieldLayout name={"wheel"} label={"Wheel"} {...props} />;
};
