import React from "react";
import { ChairCreateView } from "./chair-create-view";
import { FormLayout } from "../../../form";
import { useChairCreate } from "../../hooks/use-chair-create";
import { FormikProps } from "formik";
import { useChariDetails } from "../../hooks";
import { Typography } from "@material-ui/core";

export const ChairCreateApollo = ({ setIsOpen, mediaLoading }) => {
  const { refetch, loading: dLoading } = useChariDetails();
  const {
    chairCreationSchema,
    initialValues,
    createChair,
    loading,
  } = useChairCreate(null, () => {
    refetch();
    setIsOpen(false);
  });

  return (
    <FormLayout
      validationSchema={chairCreationSchema}
      onSubmit={(values) => {
        createChair(values);
      }}
      initialValues={initialValues}
    >
      {({ ...props }: FormikProps<any>) => (
        <>
          <Typography style={{ textAlign: "center" }}>Create Chair</Typography>
          <ChairCreateView
            {...props}
            mediaLoading={mediaLoading}
            loading={loading || dLoading}
          />
        </>
      )}
    </FormLayout>
  );
};
