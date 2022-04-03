import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "50px 0",
    },
    singleSlider: {
      background: "lightgrey",
      border: "2px solid white",
      borderRadius: "50%",
      boxShadow: "",
      margin: "0 10px",
    },
    sliderNavigationButton: {
      background: "linear-gradient(315deg, #000000 0%, #7f8c8d 74%)",
      borderRadius: "50%",
      padding: "22px",
      position: "absolute",
      cursor: "pointer",
      top: "50%",
      zIndex: 100,
      transform: "translate(0,-50%)",
      "@media (max-width:600px)": {
        padding: "10px",
      },
    },
    cardContent: {
      margin: "auto",
      width: "100%",
      maxWidth: "400px",
      height: "350px",
      "@media (max-width:1100px)": {
        maxWidth: "300px",
      },
      "@media (max-width:600px)": {
        padding: "0",
        maxWidth: "160px",
      },
      "@media (max-width:450px)": {
        height: "150px",
      },
    },
    imgStyle: {
      margin: "auto",
      height: "100%",
      transition: "transform .2s",
      width: "100%",
      objectFit: "contain",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    viewAllButon: {
      textTransform: "capitalize",
      background: "linear-gradient(180deg, #404040 0%, #7f8c8d 74%)",
      color: "#ffffff",
      borderRadius: "25px",
      padding: "10px 20px",
      marginTop: "15px",
      marginRight: "50px",
    },
  })
);
