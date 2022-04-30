import React from "react";
import { ChairCreateView } from "./chair-create-view";
import { FormLayout } from "../../../form";
import { useChairCreate } from "../../hooks/use-chair-create";
import { FormikProps } from "formik";
import { useChariDetails } from "../../hooks";

export const ChairCreateApollo = ({ setIsOpen }) => {
  const { refetch } = useChariDetails();
  const { chairCreationSchema, initialValues, createChair } = useChairCreate(
    null,
    () => {
      refetch();
      setIsOpen(false);
    }
  );

  return (
    <FormLayout
      validationSchema={chairCreationSchema}
      onSubmit={(values) => {
        createChair(values);
      }}
      initialValues={initialValues}
    >
      {({ ...props }: FormikProps<any>) => <ChairCreateView {...props} />}
    </FormLayout>
  );
};
