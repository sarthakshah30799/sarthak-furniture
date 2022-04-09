import { CreateChairInput } from "./../../../../generated/graphql";
import * as Yup from "yup";
import { useCreateChairMutation } from "../../../../generated/graphql";

export const useChairCreate = () => {
  const [chairCreateMutation, { loading }] = useCreateChairMutation();

  const chairFields = {
    id: Yup.string().ensure().required(),
    name: Yup.string().ensure().required(),
    type: Yup.string().ensure().required(),
    arm: Yup.boolean().default(false),
    armMaterial: Yup.string().ensure(),
    color: Yup.string().ensure().required(),
    headrest: Yup.boolean().default(false),
    price: Yup.number().required(),
    pushback: Yup.string().ensure().required(),
    seatcolor: Yup.string().ensure().required(),
    seatmaterial: Yup.string().ensure().required(),
    stand: Yup.string().ensure().required(),
    wheel: Yup.string().ensure().required(),
  };

  const chairCreationSchema = Yup.object().shape({
    ...chairFields,
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

  return { createChair, chairCreationSchema, loading };
};
