import { useGetAllChairsQuery, Chair } from "../../../generated/graphql";
import { get } from "lodash";

export const useChariDetails = () => {
  const { data, loading, refetch } = useGetAllChairsQuery();
  const chairs = get(data, "allChairs.nodes", []) as Chair[];
  return {
    chairs,
    loading,
    refetch,
  };
};
