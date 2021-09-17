import { Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./HomePageStyle.js";
import { useQuery } from "react-query";
import chairFactory from "../API_CALL/Factory/chairFactory.js";

export default function HomePage({ category }) {
  const classes = useStyles();
  const { data, isLoading } = useQuery(category, () => chairFactory.getAll());
  if (isLoading) {
    return <>loading...</>;
  }
  console.log("data", data);

  return (
    <Grid container className={classes.root}>
      {data.map((data, index) => (
        <Grid
          item
          lg={3}
          sm={4}
          xs={6}
          key={`chairs-image-${index}`}
          style={{ paddingBottom: "50px", position: "relative" }}
        >
          <img
            src={data.chair_img}
            alt={data.chair_name}
            className={classes.img}
          />
          <Grid className={classes.prodInfo}>
            <Typography variant="h5" className={classes.title}>
              Name: <span style={{ fontWeight: "400" }}>{data.chair_name}</span>
            </Typography>
            <Typography variant="h5" className={classes.title}>
              Type: <span style={{ fontWeight: "400" }}>{data.chair_type}</span>
            </Typography>
          </Grid>
          <Link to={`/Chairs/${data.chair_id}`} className={classes.viewAllLink}>
            <Button className={classes.viewAllButton}>View Full Details</Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
