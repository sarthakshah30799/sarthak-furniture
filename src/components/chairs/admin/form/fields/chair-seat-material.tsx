import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairSeatMaterialField: React.FC<FormikProps<any>> = ({
  ...props
}) => {
  return (
    <FormFieldLayout name={"seatmaterial"} label={"Seat Material"} {...props} />
  );
};
