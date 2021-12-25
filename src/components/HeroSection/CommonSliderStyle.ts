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
      padding: "50px 40px",
      borderRadius: "20px",
      background: "lightgrey",
      maxWidth: "600px",
      "@media (max-width:1100px)": {
        padding: "30px 20px",
      },
      "@media (max-width:600px)": {
        padding: "30px 20px",
      },
      "@media (max-width:375px)": {
        padding: "10px",
      },
    },
    imgStyle: {
      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
      margin: "auto",
      height: "350px",
      borderRadius: "15px",
      transition: "transform .2s",
      maxWidth: "500px",
      width: "100%",
      "&:hover": {
        transform: "scale(1.1)",
      },
      cursor: "pointer",
      "@media (max-width:1100px)": {
        height: "300px",
      },
      "@media (max-width:600px)": {
        maxWidth: "350px",
        maxHeight: "250px",
        borderRadius: "20px",
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
