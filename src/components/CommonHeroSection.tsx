import { Container, Box, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./CommonHeroSectionStyle";
import { Link } from "react-router-dom";
import CommonSlider from "./HeroSection/CommonSlider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function CommonHeroSection({ sliderContent, slideToShow }) {
  const classes = useStyles();
  return (
    <Container className={classes.root} id={sliderContent.title.toLowerCase()}>
      <Grid>
        <Typography variant="h1" style={{ color: "black" }}>
          {sliderContent.title}
        </Typography>
        <div className={classes.sliderContainer}>
          <CommonSlider
            sliderContent={sliderContent}
            slideToShow={slideToShow}
            action={"/chairs/123"}
          />
          <Box
            display="flex"
            justifyContent="flex-end"
            className={classes.positionCenter}
          >
            <Link
              style={{ textDecoration: "none" }}
              to={`/${sliderContent.title.toLowerCase()}`}
            >
              <Button className={classes.viewAllButon}>
                View All <ArrowForwardIcon style={{ paddingLeft: "7px" }} />
              </Button>
            </Link>
          </Box>
        </div>
      </Grid>
    </Container>
  );
}
