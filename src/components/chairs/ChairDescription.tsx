import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { get } from "lodash";

export const ChairDescription = ({ chair }) => {
  return (
    <Grid container spacing={2} className={"product-details"}>
      <Grid item xs={4}>
        <Typography className={"product-detail-key"}>Arm</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography className={"product-detail-value"}>
          {!chair.arm ? "No" : chair.armMaterial}
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Typography className={"product-detail-key"}>Chair-Back</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography className={"product-detail-value"}>{`${get(
          chair,
          "backColor"
        )} color with ${get(chair, "backMaterial")}`}</Typography>
      </Grid>

      <Grid item xs={4}>
        <Typography className={"product-detail-key"}>Chair-Seat</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography className={"product-detail-value"}>{`${get(
          chair,
          "seatColor"
        )} color with ${get(chair, "seatMaterial")}`}</Typography>
      </Grid>

      <Grid item xs={4}>
        <Typography className={"product-detail-key"}>Head-Rest</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography className={"product-detail-value"}>
          {get(chair, "headRest") ? "Yes" : "No"}
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Typography className={"product-detail-key"}>
          Height Adjustable
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography className={"product-detail-value"}>
          {!get(chair, "heightAdjustable")
            ? "No"
            : get(chair, "heightAdjustable")}
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Typography className={"product-detail-key"}>Chair Base</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography className={"product-detail-value"}>
          {`${get(chair, "stand")} with ${get(chair, "wheel")}`}
        </Typography>
      </Grid>
    </Grid>
  );
};
