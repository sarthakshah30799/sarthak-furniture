import * as React from "react";
import { heroSectionData } from "../../productData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    heroImage: {
      backgroundSize: "cover",
      objectFit: "cover",
      width: "100%",
      height: "400px",
      opacity: "100%",
      filter: "blur(3px)",
      boxSizing: "border-box",
      "@media (max-width:600px)": {
        height: "150px",
      },
    },
  })
);
const HeroSection = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const classes = useStyles();

  return (
    <Box style={{ paddingBottom: "70px" }}>
      <Slider {...settings}>
        {heroSectionData.map((data) => (
          <div>
            <Box position="relative">
              <img
                className={classes.heroImage}
                src={data.imageUrl}
                alt={data.title}
              />
              <Box
                position="absolute"
                top="50%"
                left="50%"
                style={{
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  textTransform: "uppercase",
                }}
                border="3px solid #f1f1f1"
                padding={{ xs: "20px", md: "20px 30px" }}
                color="#fff"
                bgcolor="rgb(0,0,0)"
                fontSize={{ xs: "15px", md: "30px" }}
                fontWeight={"bold"}
                letterSpacing={"3.3px"}
              >
                {data.description}
              </Box>
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
