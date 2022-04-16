import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairSeatColorField: React.FC<FormikProps<any>> = ({
  ...props
}) => {
  return <FormFieldLayout name={"seatcolor"} label={"Seat Color"} {...props} />;
};
