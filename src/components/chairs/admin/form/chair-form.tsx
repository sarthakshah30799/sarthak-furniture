import React from "react";
import {
  ChairArmField,
  ChairArmMaterialField,
  ChairBackColorField,
  ChairBackMaterialField,
  ChairHeadRestField,
  ChairHeightAdjustableField,
  ChairIdField,
  ChairNameField,
  ChairPriceField,
  ChairPushbackField,
  ChairSeatColorField,
  ChairSeatMaterialField,
  ChairStandField,
  ChairTypeField,
  ChairWheelField,
} from "./fields";
import { Form, FormikProps } from "formik";
import { SubmitButton } from "../../../form";

export const ChairCreateForm: React.FC<FormikProps<any>> = ({ ...props }) => {
  return (
    <Form>
      <ChairIdField {...props} />
      <ChairNameField {...props} />
      <ChairTypeField {...props} />
      <ChairPriceField {...props} />
      <ChairHeadRestField {...props} />
      <ChairBackColorField {...props} />
      <ChairBackMaterialField {...props} />
      <ChairArmField {...props} />
      <ChairArmMaterialField {...props} />
      <ChairSeatColorField {...props} />
      <ChairSeatMaterialField {...props} />
      <ChairPushbackField {...props} />
      <ChairHeightAdjustableField {...props} />
      <ChairStandField {...props} />
      <ChairWheelField {...props} />
      <SubmitButton />
    </Form>
  );
};
