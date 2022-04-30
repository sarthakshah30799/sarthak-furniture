import React, { useMemo } from "react";
import {
  Avatar,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    cardContent: {
      width: "100%",
      margin: "20px 0",
      "@media(max-width:'600px')": {
        margin: "10px 0",
      },
    },
    imgStyle: {
      height: "100%",
      width: "100%",
      backgroundColor: "unset",
    },
    chairDetail: {
      padding: "20px",
      textAlign: "start",
      "@media (max-width:600px)": {
        padding: "10px",
      },
    },
  })
);

export const ChairCard = ({ chair }) => {
  const classes = useStyles();
  const isMobileView = useMemo(() => {
    return window.innerWidth <= 780 ? true : false;
  }, []);

  return (
    <Paper className={classes.cardContent}>
      <Grid style={{ width: "100%" }} container>
        <Grid item xs={12} lg={5}>
          <Avatar
            src="/assets/sf-logo.png"
            variant="rounded"
            className={classes.imgStyle}
          >
            <img src="https://via.placeholder.com/150" alt="chair1" />
          </Avatar>
        </Grid>
        <Grid item xs={12} lg={7} className={classes.chairDetail}>
          <Typography>
            {isMobileView ? chair?.name : `Name: ${chair?.name}`}
          </Typography>
          <Typography>
            {isMobileView ? chair?.type : `Type: ${chair?.type}`}
          </Typography>
          <Typography>
            {isMobileView ? chair?.price : `Price: ${chair?.price}`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
