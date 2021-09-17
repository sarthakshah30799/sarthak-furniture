import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import React from "react";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import { footer, header } from "../../data";

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      borderTop: "3px solid black",
      marginTop: "30px",
      backgroundColor: "lightgrey",
    },
    footerContent: {
      paddingTop: "20px",
      maxWidth: "1100px",
      margin: "0 auto",
      paddingBottom: "20px",
      "@media (max-width:1100px)": {
        maxWidth: "950px",
      },
      "@media (max-width:900px)": {
        maxWidth: "700px",
      },
      "@media (max-width:600px)": {
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    aboutUsContent: {
      "@media (min-width:600px)": {
        textAlign: "left",
      },
    },
    socialMediaContent: {
      display: "flex",
      flexDirection: "column",
      width: "200px",
      textAlign: "center",
      "@media (max-width:600px)": {
        paddingTop: "20px",
      },
    },
  })
);
export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.footer} id="about">
        <Grid
          container
          className={classes.footerContent}
          direction="row"
          justify="space-between"
        >
          <Grid item className={classes.aboutUsContent}>
            <Typography variant="h3">{footer.title}</Typography>
            <Typography
              variant="h5"
              style={{ paddingTop: "10px", fontWeight: "600" }}
            >
              GST No: {header.gstNo}
            </Typography>
            <Box className={classes.aboutUsContent} paddingTop="20px">
              <Typography variant="h5">{footer.add1}</Typography>
              <Typography variant="h5">{footer.add2}</Typography>
              <Typography variant="h5">
                {footer.city}, {footer.state} - {footer.pincode}
              </Typography>
            </Box>
          </Grid>
          <Grid item className={classes.socialMediaContent}>
            <Typography variant="h5">Contact Us</Typography>
            <Box
              paddingTop="20px"
              display="flex"
              justifyContent="space-between"
            >
              <CallIcon />
              <MailIcon />
              <InstagramIcon />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
