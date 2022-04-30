import {
  Chair,
  CreateChairInput,
  useCreateChairMutation,
} from "../../../generated/graphql";
import * as Yup from "yup";

export const useChairCreate = (chair?: Chair | null, callback?: Function) => {
  const [chairCreateMutation, { loading }] = useCreateChairMutation({
    onCompleted() {
      if (callback) {
        callback();
      }
    },
  });

  const chairFields = {
    name: Yup.string().ensure().required(),
    type: Yup.string().ensure().required(),
    arm: Yup.boolean().default(true).required(),
    armmaterial: Yup.string().ensure().required(),
    backcolor: Yup.string().ensure().required(),
    backmaterial: Yup.string().ensure().required(),
    headrest: Yup.boolean().default(false).required(),
    price: Yup.number().min(100).required(),
    pushback: Yup.string().ensure().required(),
    seatcolor: Yup.string().ensure().required(),
    seatmaterial: Yup.string().ensure().required(),
    stand: Yup.string().ensure().required(),
    wheel: Yup.string().ensure().required(),
    heightadjustable: Yup.string().ensure().required(),
  };

  const chairCreationSchema = Yup.object().shape({
    ...chairFields,
  });

  const initialValues = chairCreationSchema.cast(chair || {}, {
    assert: true,
  });

  const createChair = (input: Yup.InferType<typeof chairCreationSchema>) => {
    const sanitizedInput = {
      chair: chairCreationSchema.cast(input, {
        assert: true,
      }),
    } as CreateChairInput;
    chairCreateMutation({
      variables: {
        input: sanitizedInput,
      },
    });
  };

  return { createChair, chairCreationSchema, initialValues, loading };
};
