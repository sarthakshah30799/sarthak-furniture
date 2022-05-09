import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useStyles } from "./CommonSliderStyle";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { noImage } from "../../data";

const sliderSetting = (setActiveSlide) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return settings;
};

export default function CommonSlider({ sliderContent, slideToShow, action }) {
  const classes = useStyles();
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<any>(null);

  const handleSlider = (direction: string) => {
    if (direction === "next") {
      sliderRef?.current?.slickNext();
    } else {
      sliderRef?.current?.slickPrev();
    }
  };

  const settings = sliderSetting(setActiveSlide);

  return (
    <Box
      boxShadow={"0 2px 4px 0 rgb(0 0 0 / 8%)"}
      padding="20px 0"
      position={"relative"}
    >
      <Box
        className={classes.sliderNavigationButton}
        top={0}
        left={0}
        onClick={() => !!activeSlide && handleSlider("prev")}
        style={{
          opacity: !activeSlide ? 0.5 : 1,
          cursor: !activeSlide ? "not-allowed" : "pointer",
        }}
      >
        <ArrowBackIcon style={{ color: "white" }} />
      </Box>
      <Box
        className={classes.sliderNavigationButton}
        top={0}
        right={0}
        onClick={() =>
          !(
            activeSlide ===
            sliderContent.sliderImage.length -
              (window.innerWidth < 1100 ? 2 : 3)
          ) && handleSlider("next")
        }
        style={{
          opacity:
            activeSlide ===
            sliderContent.sliderImage.length -
              (window.innerWidth < 1100 ? 2 : 3)
              ? 0.5
              : 1,
          cursor:
            activeSlide ===
            sliderContent.sliderImage.length -
              (window.innerWidth < 1100 ? 2 : 3)
              ? "not-allowed"
              : "pointer",
        }}
      >
        <ArrowForwardIcon style={{ color: "white" }} />
      </Box>
      <Slider ref={sliderRef} {...settings}>
        {sliderContent.sliderImage.map((data, index) => (
          <Link
            key={`slider-${data.name}-${index}`}
            to={`/${sliderContent.title.toLowerCase()}/${data.id}`}
          >
            <Grid className={classes.cardContent}>
              <img
                src={!!data.image ? data.image : noImage}
                alt={data.name}
                className={classes.imgStyle}
              />
            </Grid>
          </Link>
        ))}
      </Slider>
    </Box>
  );
}
