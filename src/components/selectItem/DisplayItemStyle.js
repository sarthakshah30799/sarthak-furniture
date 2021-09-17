import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    productDetails: {
      paddingTop: "50px",
      maxWidth: "900px",
      margin: "auto",
    },
    imgStyle: {
      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
      margin: "auto",
      height: "350px",
      borderRadius: "15px",
      transition: "transform .2s",
      "&:hover": {
        transform: "scale(1.1)",
      },
      cursor: "pointer",
    },
    sliderContainer: {
      padding: "40px 0",
    },
    singleSlider: {
      background: "lightgrey",
      border: "2px solid white",
      borderRadius: "50%",
      boxShadow: "",
      margin: "0 10px",
    },
    cardContent: {
      margin: "auto",
      padding: "50px 40px",
      borderRadius: "20px",
      background: "lightgrey",
      maxWidth: "600px",
    },
  })
);
