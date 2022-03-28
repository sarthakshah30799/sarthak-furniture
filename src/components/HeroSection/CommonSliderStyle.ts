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
    cardContent: {
      margin: "auto",
      padding: "20px",
      width: "100%",
      maxWidth: "600px",
      height: "350px",
      "@media (max-width:1100px)": {
        padding: "30px 20px",
      },
      "@media (max-width:600px)": {
        padding: "0",
      },
      "@media (max-width:375px)": {
        padding: "0px",
        maxWidth: "160px",
        height: "250px",
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
      // "@media (max-width:600px)": {
      //   padding: "0 10px",
      // },
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
