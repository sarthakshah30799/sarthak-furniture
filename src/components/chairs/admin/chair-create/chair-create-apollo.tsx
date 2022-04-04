import React from "react";
import { ChairCreateView } from "./chair-create-view";
import { FormLayout } from "../../../form";
import { useChairCreate } from "../hooks/use-chair-create";

export const ChairCreateApollo = () => {
  const { chairCreationSchema } = useChairCreate();
  const initialValues = {
    name: "",
  };
  return (
    <FormLayout
      validationSchema={chairCreationSchema}
      onSubmit={() => {}}
      initialValues={initialValues}
    >
      {({ ...props }) => <ChairCreateView {...props} />}
    </FormLayout>
  );
};
