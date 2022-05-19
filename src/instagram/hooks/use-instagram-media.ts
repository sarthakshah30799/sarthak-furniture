import {
  useInstagramMediaQuery,
  InstagramMedia,
} from "./../../generated/graphql";

export const useInstagramMedia = (code: string) => {
  const { data, loading } = useInstagramMediaQuery({
    variables: { code },
    skip: !code,
  });

  return {
    media: data?.instagramMedia as InstagramMedia,
    loading,
  };
};
