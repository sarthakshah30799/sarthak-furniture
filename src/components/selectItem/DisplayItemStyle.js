import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    productDetails: {
      paddingTop: "50px",
      maxWidth: "900px",
      margin: "auto",
      "@media (max-width:600px)": {
        maxWidth: "400px",
      },
      "@media (max-width:400px)": {
        maxWidth: "350px",
      },
    },
    cardContent: {
      margin: "auto",
      padding: "50px 40px",
      borderRadius: "20px",
      background: "lightgrey",
      maxWidth: "600px",
      "@media (max-width:600px)": {
        maxWidth: "400px",
        padding: "50px 40px",
      },
      "@media (max-width:500px)": {
        maxWidth: "350px",
        padding: "30px 20px",
      },
    },
    imgStyle: {
      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
      margin: "auto",
      height: "500px",
      borderRadius: "15px",
      maxWidth: "500px",
      width: "100%",
      transition: "transform .2s",
      "&:hover": {
        transform: "scale(1.2)",
      },
      cursor: "pointer",
      "@media (max-width:1100px)": {
        height: "500px",
      },
      "@media (max-width:600px)": {
        maxWidth: "450px",
        maxHeight: "350px",
        borderRadius: "20px",
      },
    },
    chairInfoTable: {
      maxWidth: "600px",
      margin: "auto",
      marginTop: "30px",
      padding: "20px 10px",
      border: "1px solid grey",
      "@media (max-width:600px)": {
        maxWidth: "350px",
        padding: "20px 0px",
      },
    },
    chairInfoRow: {
      bottomBorder: "1px solid black",
    },
    chairInfoKey: {
      fontWeight: "600",
    },
  })
);
