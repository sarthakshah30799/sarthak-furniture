import React from "react";
import { useParams } from "react-router-dom";
import { CategoryProducts } from "../../components/CategoryProductsLayout/CategoryProducts";
import DisplayItem from "../../components/selectItem/DisplayItem";

export default function Product() {
  const { id } = useParams();
  console.log("slug", id);
  return (
    <CategoryProducts>
      <DisplayItem id={id} />
    </CategoryProducts>
  );
}
