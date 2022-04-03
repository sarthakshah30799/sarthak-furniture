import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "55px",
      fontWeight: 700,
      "@media (max-width:1100px)": {
        fontSize: "40px",
      },
      fontFamily: "Raleway",
      letterSpacing: "2px",
    },
    h2: {
      fontSize: "40px",
      fontWeight: 500,
      "@media (max-width:1100px)": {
        fontSize: "30px",
      },
      "@media (max-width:600px)": {
        fontSize: "25px",
      },
      "@media (max-width:350px)": {
        fontSize: "20px",
      },
    },
    h3: {
      fontSize: "30px",
      fontWeight: 600,
      "@media (max-width:900px)": {
        fontSize: "22px",
      },
      "@media (max-width:400px)": {
        fontSize: "18px",
      },
    },
    h4: {
      fontSize: "25px",
      fontWeight: 700,
      "@media (max-width:900px)": {
        fontSize: "18px",
      },
      "@media (max-width:400px)": {
        fontSize: "15px",
      },
    },

    h5: {
      fontSize: "20px",
      fontWeight: "normal",
      "@media (max-width:1100px)": {
        fontSize: "18px",
      },
      "@media (max-width:600px)": {
        fontSize: "15px",
      },
      "@media (max-width:400px)": {
        fontSize: "12px",
      },
    },
    h6: {
      fontSize: "15px",
      fontWeight: 600,
    },
  },
});
