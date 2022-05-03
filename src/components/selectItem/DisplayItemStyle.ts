import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "30px 0",
    },
    mainImage: {
      height: "400px",
      borderRadius: "8px",
    },
    subImages: {
      maxHeight: "80px",
      borderRadius: "8px",
      objectFit: "cover",
      cursor: "pointer",
    },
    nonSelectedImage: {
      opacity: 0.5,
    },
    detailsContent: {
      textAlign: "left",
    },
    detailTextStyle: {
      textTransform: "capitalize",
      fontWeight: "bold",
      fontSize: "22px",
      padding: "5px 0",
      display: "flex",
      alignItems: "center",
    },
    buttonGroup: {
      padding: "20px 0",
    },
    addToCartButton: {
      minWidth: "180px",
      backgroundColor: "#D867C0",
      textTransform: "capitalize",
      fontWeight: "bold",
      padding: "10px 0",
    },
    buyNowButton: {
      minWidth: "180px",
      backgroundColor: "#4073FF",
      marginLeft: "20px",
      textTransform: "capitalize",
      fontWeight: "bold",
      padding: "10px 0",
    },
    deliveryText: {
      fontWeight: 400,
      fontSize: "14px",
      textDecoration: "underline",
    },
    descriptionText: {
      fontWeight: "bold",
      textDecoration: "underline",
      fontSize: "30px",
      textAlign: "start",
    },
  })
);
