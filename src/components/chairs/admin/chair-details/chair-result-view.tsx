import { Box, Grid } from "@material-ui/core";
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
      <Grid container spacing={2}>
        {(chairs || []).map((chair, index) => {
          return (
            <Grid item xs={6}>
              <ChairCard key={`admin-chair-${index}`} chair={chair} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
