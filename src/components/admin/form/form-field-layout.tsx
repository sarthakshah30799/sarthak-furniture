import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Field } from "formik";

export const FormFieldLayout = ({ name, type, label, ...props }) => {
  return (
    <Box display={"flex"} justifyContent="center">
      <Typography style={{ paddingRight: "10px" }}>{label}</Typography>
      {props.children && typeof props.children === "function" ? (
        props.children
      ) : (
        <Field type={type} name={name} />
      )}

      {props.touched[name] && props.errors[name] && (
        <Typography>{props.errors[name]}</Typography>
      )}
    </Box>
  );
};
