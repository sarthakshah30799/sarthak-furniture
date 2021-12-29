import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      color: theme.palette.common.black,
      background: 'url("/assets/header/background-image.jpg")',
      borderRadius: "50px",
      position: "relative",
      boxShadow: "0px 10px 10px rgb(0,0,0,0.7)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      margin: "10px auto",
      padding: "15px 30px",
      "@media (max-width:1100px)": {
        padding: "10px 20px",
      },
    },
    headerContent: {
      "@media (max-width:900px)": {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      },
    },
    headerLink: {
      textDecoration: "none",
      transition: "transform .2s",
      display: "inline-block",
      "&:hover": {
        transform: "scale(1.2)",
        textDecoration: "none",
      },
    },
    linkStyle: {
      padding: "0 15px",
      color: "black",
      "@media (max-width:1100px)": {
        padding: "0 8px",
      },
    },
    headerLinkContent: {
      "@media (max-width:900px)": {
        display: "none",
      },
    },
    hamburger: {
      padding: "8px 20px",
      display: "flex",
      cursor: "pointer",
      "@media (max-width:600px)": {
        padding: "0",
      },
      "@media (min-width:900px)": {
        display: "none",
      },
    },
    hamburgerIcon: {
      fontSize: "2.4rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
      "@media (max-width:350px)": {
        fontSize: "1.5rem",
      },
    },
    menuItem: {
      "@media (max-width:900px)": {
        display: "none",
      },
    },
    displayNone: {
      display: "none",
    },
    mobileHeaderLink: {
      padding: "10px",
      color: "black",
      fontSize: "20px",
      fontWeight: 500,
      transition: "transform .2s",
      textDecoration: "none",
      "&:hover": {
        transform: "scale(1.5)",
        textDecoration: "none",
      },
    },
    drawer: {
      width: "50%",
      backgroundColor: "#D3D3D3",
    },
  })
);
