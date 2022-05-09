import { Box } from "@material-ui/core";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box maxWidth={"1440px"} margin="auto">
        {children}
      </Box>
      <Footer />
    </>
  );
}
