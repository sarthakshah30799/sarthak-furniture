import { Button } from "@material-ui/core";
import React from "react";

export const SubmitButton = () => {
  return (
    <Button
      variant="outlined"
      color="primary"
      type="submit"
      style={{
        margin: "10px auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      submit
    </Button>
  );
};
