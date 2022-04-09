import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Field, FormikProps } from "formik";

interface Props {
  name: string;
  type?: string;
  label: string;
}

export const FormFieldLayout: React.FC<Props & FormikProps<any>> = ({
  name,
  type = "text",
  label,
  ...props
}) => {
  return (
    <Box py={1} maxWidth={"400px"}>
      <Box display={"flex"} justifyContent="space-between">
        <Typography style={{ paddingRight: "10px" }}>{label} *</Typography>
        {props.children && typeof props.children === "function" ? (
          props.children
        ) : (
          <Field type={type} name={name} />
        )}
      </Box>

      {props.touched[name] && props.errors[name] && (
        <Typography variant="h6" style={{ textAlign: "start" }} color="error">
          {props.errors[name]}
        </Typography>
      )}
    </Box>
  );
};
