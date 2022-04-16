import React from "react";
import { Avatar, Grid, Paper, Typography } from "@material-ui/core";

export const ChairCard = ({ chair }) => {
  return (
    <Paper style={{ width: "100%", margin: "20px 0" }}>
      <Grid style={{ width: "100%" }} container spacing={2}>
        <Grid item xs={3}>
          <Avatar
            src="/assets/sf-logo.png"
            variant="rounded"
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "unset",
            }}
          >
            <img src="https://via.placeholder.com/150" alt="chair1" />
          </Avatar>
        </Grid>
        <Grid item xs={7} style={{ textAlign: "start" }}>
          <Typography>Name: {chair?.name}</Typography>
          <Typography>Type: {chair?.type}</Typography>
          <Typography>Price: {chair?.price}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
