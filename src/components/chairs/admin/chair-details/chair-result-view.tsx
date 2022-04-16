import { Box } from "@material-ui/core";
import React from "react";
import { useChariDetails } from "../../hooks";
import { ChairCard } from "./chair-card";

export const ChairResultView = () => {
  const { chairs, loading } = useChariDetails();
  if (loading) {
    return <>Loading...</>;
  }
  return (
    <Box>
      {(chairs || []).map((chair, index) => {
        return <ChairCard key={`admin-chair-${index}`} chair={chair} />;
      })}
    </Box>
  );
};
