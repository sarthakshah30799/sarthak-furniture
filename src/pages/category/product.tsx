import React from "react";
import { CategoryProductsLayout } from "../../components/layout/CategoryProductsLayout";
import DisplayItem from "../../components/selectItem/DisplayItem";

export default function Product() {
  return (
    <CategoryProductsLayout>
      <DisplayItem />
    </CategoryProductsLayout>
  );
}
