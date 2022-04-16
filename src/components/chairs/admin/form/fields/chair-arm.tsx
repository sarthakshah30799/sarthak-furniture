import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout, FormRadioField } from "../../../../form";

export const ChairArmField: React.FC<FormikProps<any>> = ({ ...props }) => {
  return (
    <FormFieldLayout name={"arm"} label={"Arm"} {...props}>
      {({ field, form, ...props }) => (
        <FormRadioField field={field} form={form} {...props} />
      )}
    </FormFieldLayout>
  );
};
