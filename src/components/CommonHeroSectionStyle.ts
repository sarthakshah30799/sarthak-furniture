import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "20px 0",
    },
    sliderContainer: {
      margin: "auto",
      padding: "30px 10px",
      "@media (max-width:1100px)": {
        padding: "30px 10px",
      },
      "@media (max-width:600px)": {
        padding: "20px 10px",
      },
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
    viewAllButon: {
      textTransform: "capitalize",
      background: "linear-gradient(180deg, #404040 0%, #7f8c8d 74%)",
      color: "#ffffff",
      padding: "10px 20px",
      marginTop: "30px",
      fontWeight: 600,
      "@media (max-width:600px)": {
        marginTop: "30px",
        padding: "8px 15px",
      },
    },
    positionCenter: {
      paddingRight: "40px",
      "@media (max-width:600px)": {
        justifyContent: "center",
        paddingRight: "0",
      },
    },
  })
);
