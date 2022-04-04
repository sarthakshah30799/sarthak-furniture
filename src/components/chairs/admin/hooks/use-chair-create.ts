import { CreateChairInput } from "./../../../../generated/graphql";
import * as Yup from "yup";
import { useCreateChairMutation } from "../../../../generated/graphql";

export const useChairCreate = () => {
  const [chairCreateMutation, { loading }] = useCreateChairMutation();

  const chairFields = {
    id: Yup.string().ensure().required(),
    name: Yup.string().ensure().required(),
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
