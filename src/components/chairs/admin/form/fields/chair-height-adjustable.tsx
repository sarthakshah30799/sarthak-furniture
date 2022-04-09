import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairHeightAdjustableField: React.FC<FormikProps<any>> = ({
  ...props
}) => {
  return (
    <FormFieldLayout
      name={"heightadjustable"}
      label={"Height adjustable"}
      {...props}
    />
  );
};
