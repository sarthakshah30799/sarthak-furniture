import React from "react";
import Footer from "../layout/Footer";
import SubHeader from "../subHeader/subHeader";

export const CategoryProducts = ({ children }) => {
  return (
    <>
      <SubHeader />
      {children}
      <Footer />
    </>
  );
};
