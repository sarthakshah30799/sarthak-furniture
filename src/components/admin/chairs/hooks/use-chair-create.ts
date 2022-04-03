import * as Yup from "yup";

export const useChairCreate = () => {
  const chairFields = {
    name: Yup.string().ensure().required(),
  };

  const chairCreationSchema = Yup.object().shape({
    ...chairFields,
  });

  return { chairCreationSchema };
};
