import { FormikProps } from "formik";
import React from "react";
import { ChairCreateForm } from "../form/chair-form";

export const ChairCreateView: React.FC<FormikProps<any>> = ({ ...props }) => {
  return <ChairCreateForm {...props} />;
};
