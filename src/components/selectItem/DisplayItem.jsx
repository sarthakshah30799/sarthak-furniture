import { Grid, Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "./DisplayItemStyle";
import { useQuery } from "react-query";
import chairFactory from "../../API_CALL/Factory/chairFactory";

export default function DisplayItem({ id }) {
  const classes = useStyles();
  console.log("components", id);
  const { data, isLoading } = useQuery(id, () => chairFactory.get(id));
  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <>
      {data.map((data) => (
        <>
          <Grid className={classes.productDetails}>
            <div>
              <Grid className={classes.cardContent}>
                <img
                  src="/assets/chair-section/chair-image-1.jpeg"
                  alt={data.chair_name}
                  className={classes.imgStyle}
                />
              </Grid>
            </div>
          </Grid>
          <Grid container className={classes.chairInfoTable} spacing={2}>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Name: </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_name}</div>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Type: </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_type}</div>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Arm: </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_arm}</div>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Arm material: </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_arm_material}</div>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Back color : </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_back_color}</div>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Back material: </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_back_material}</div>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Headrest: </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_headrest}</div>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Height adjustable: </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_height_adjustable}</div>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Pushback: </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_pushback}</div>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Seat color: </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_seat_color}</div>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Seat material: </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_seat_material}</div>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Stand: </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_stand}</div>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.chairInfoKey}
              style={{ fontWeight: "600" }}
            >
              <div>Wheel: </div>
            </Grid>
            <Grid item xs={6}>
              <div>{data.chair_wheel}</div>
            </Grid>
          </Grid>
        </>
      ))}
    </>
  );
}
