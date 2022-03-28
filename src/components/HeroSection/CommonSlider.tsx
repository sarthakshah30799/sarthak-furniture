import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useStyles } from "./CommonSliderStyle";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { noImage } from "../../data";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        position: "absolute",
        background: `linear-gradient(315deg, #000000 0%, #7f8c8d 74%)`,
        borderRadius: "50%",
        padding: "22px",
        bottom: "39%",
        right: "0",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <ArrowForwardIcon style={{ color: "white" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        background: `linear-gradient(315deg, #000000 0%, #7f8c8d 74%)`,
        borderRadius: "50%",
        padding: "22px",
        left: "0",
        position: "absolute",
        top: "40%",
        cursor: "pointer",
        zIndex: "100",
      }}
      onClick={onClick}
    >
      <ArrowBackIcon onClick={onClick} style={{ color: "white" }} />
    </div>
  );
}
export default function CommonSlider({ sliderContent, slideToShow, action }) {
  const classes = useStyles();
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    centerPadding: "60px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {sliderContent.sliderImage.map((data, index) => (
        <Box key={`slider-${data.name}-${index}`}>
          <Link to={`/${sliderContent.title.toLowerCase()}/${data.id}`}>
            <Grid className={classes.cardContent}>
              <img
                src={!!data.image ? data.image : noImage}
                alt={data.name}
                className={classes.imgStyle}
              />
            </Grid>
          </Link>
        </Box>
      ))}
    </Slider>
  );
}
