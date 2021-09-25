import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./DisplayItemStyle";
// import { useQuery } from "react-query";
// import chairFactory from "../../API_CALL/Factory/chairFactory";

export default function DisplayItem({ data, id }) {
  const classes = useStyles();
  // console.log("components", id);
  // const { data, isLoading } = useQuery(id, () => chairFactory.get(id));
  // if (isLoading) {
  //   return <>loading...</>;
  // }
  console.log("id", id);
  console.log("data", data);
  const itemData = data.filter((data) => data.id === id);
  console.log("item data", itemData);
  return (
    <>
      {itemData.map((data) => (
        <>
          <Grid className={classes.productDetails}>
            <div>
              <Grid className={classes.cardContent}>
                <img
                  src={data.image}
                  alt={data.name}
                  className={classes.imgStyle}
                />
              </Grid>
            </div>
          </Grid>
          <Box paddingTop="20px">
            <Typography variant="h4" style={{ paddingBottom: "10px" }}>
              Enquiry or Order on
            </Typography>
            <Typography variant="h3">
              Vipulbhai : 9825381956, 7016911293
            </Typography>
          </Box>
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
              <div>{data.name || ""}</div>
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
              <div>{data.type || ""}</div>
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
              <div>{data.arm || ""}</div>
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
              <div>{data.arm_material || ""}</div>
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
              <div>{data.back_color || ""}</div>
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
              <div>{data.back_material || ""}</div>
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
              <div>{data.headrest || ""}</div>
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
              <div>{data.height_adjustable || ""}</div>
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
              <div>{data.pushback || ""}</div>
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
              <div>{data.seat_color || ""}</div>
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
              <div>{data.seat_material || ""}</div>
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
              <div>{data.stand || ""}</div>
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
              <div>{data.wheel || ""}</div>
            </Grid>
          </Grid>
        </>
      ))}
    </>
  );
}
