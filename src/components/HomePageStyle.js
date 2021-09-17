import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: "1200px",
      paddingTop: "100px",
      margin: "auto",
      justifyContent: "space-around",
      "@media (max-width:1100px)": {
        maxWidth: "950px",
      },
      "@media (max-width:900px)": {
        maxWidth: "700px",
      },
      "@media (max-width:600px)": {
        paddingTop: "50px",
        maxWidth: "400px",
      },
      "@media (max-width:400px)": {
        maxWidth: "350px",
      },
    },
    img: {
      maxHeight: "350px",
      borderRadius: "10px",
      width: "100%",
      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
      "@media (max-width:600px)": {
        maxHeight: "200px",
      },
      "@media (max-width:400px)": {
        maxHeight: "175px",
      },
    },
    prodInfo: {
      paddingTop: "20px",
      paddingBottom: "10px",
      paddingInline: "30px",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    title: {
      fontWeight: "bold",
      padding: "3px 0",
    },
    viewAllButton: {
      textTransform: "capitalize",
      borderRadius: "20px",
      background: "#D3D3D3",
      fontSize: "12px",
      fontWeight: "700",
      paddingInline: "20px",
    },
    viewAllLink: {
      position: "absolute",
      bottom: "50px",
      left: "0",
      right: "0",
    },
  })
);
