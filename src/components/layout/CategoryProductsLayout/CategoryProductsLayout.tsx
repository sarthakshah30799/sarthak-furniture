import React from "react";
import Footer from "../Footer";
import SubHeader from "../../subHeader/subHeader";
import { Box } from "@material-ui/core";

export const CategoryProductsLayout = ({ children }) => {
  return (
    <>
      <SubHeader />
      <Box maxWidth={"1100px"} paddingTop="50px" margin="auto">
        {children}
      </Box>
      <Footer />
    </>
  );
};
