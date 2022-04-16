import { FormikProps } from "formik";
import React from "react";
import { FormFieldLayout, FormRadioField } from "../../../../form";

export const ChairHeadRestField: React.FC<FormikProps<any>> = ({
  ...props
}) => {
  return (
    <FormFieldLayout name={"headrest"} label={"Head-rest"} {...props}>
      {({ field, form, ...props }) => (
        <FormRadioField field={field} form={form} {...props} />
      )}
    </FormFieldLayout>
  );
};
