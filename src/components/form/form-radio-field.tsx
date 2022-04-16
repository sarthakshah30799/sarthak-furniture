import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";

export const FormRadioField = ({ field, form }) => {
  return (
    <RadioGroup
      style={{ display: "flex", flexDirection: "row" }}
      name={field.name}
      value={field.value}
      onChange={(e) => {
        const value = e.target.value === "true" ? true : false;
        return form.setFieldValue(field.name, value);
      }}
    >
      <FormControlLabel
        value={true}
        control={<Radio color="primary" />}
        label="Yes"
      />
      <FormControlLabel
        value={false}
        control={<Radio color="primary" />}
        label="No"
      />
    </RadioGroup>
  );
};
