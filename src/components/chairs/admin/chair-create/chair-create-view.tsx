import { Button } from "@material-ui/core";
import { FormikProps } from "formik";
import React, { useState } from "react";
import { instagramAppUrl } from "../../../../config";
import { ChairCreateForm } from "../form/chair-form";

interface Props {
  mediaLoading: boolean;
  loading: boolean;
}

export const ChairCreateView: React.FC<Props & FormikProps<any>> = ({
  mediaLoading,
  loading,
  ...props
}) => {
  const [processStep, setProcessStep] = useState(1);
  if (mediaLoading) {
    return <>Loading...</>;
  }
  return (
    <div style={{ height: "100%", position: "relative" }}>
      {processStep !== 1 && (
        <Button
          onClick={() => setProcessStep(processStep - 1)}
          variant="contained"
        >
          {"< Go back"}
        </Button>
      )}
      {processStep === 1 && (
        <a href={instagramAppUrl}>
          <Button color="primary" variant="outlined">
            Add photos
          </Button>
        </a>
      )}
      {processStep === 2 && <ChairCreateForm {...props} />}
      {processStep !== 2 && (
        <Button
          variant="contained"
          onClick={() => {
            setProcessStep(processStep + 1);
          }}
          style={{ position: "absolute", bottom: 0, right: 0 }}
        >
          Next
        </Button>
      )}
    </div>
  );
};
