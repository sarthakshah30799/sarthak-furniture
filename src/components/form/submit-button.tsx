import { Button } from "@material-ui/core";
import React from "react";

export const SubmitButton = ({ isLoading }) => {
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
      disabled={isLoading}
    >
      submit
    </Button>
  );
};
