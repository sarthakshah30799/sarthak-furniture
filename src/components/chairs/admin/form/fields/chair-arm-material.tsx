import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairArmMaterialField: React.FC<FormikProps<any>> = ({
  ...props
}) => {
  return (
    <FormFieldLayout name={"armmaterial"} label={"Arm material"} {...props} />
  );
};
