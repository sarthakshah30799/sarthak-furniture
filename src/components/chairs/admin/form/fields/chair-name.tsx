import React from "react";
import { FormFieldLayout } from "../../../../form";

export const ChairNameField = ({ ...props }) => {
  return (
    <FormFieldLayout name={"name"} type="text" label={"name"} {...props} />
  );
};
