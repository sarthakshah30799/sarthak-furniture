import React from "react";
import { useParams } from "react-router-dom";
import { CategoryProducts } from "../../components/CategoryProductsLayout/CategoryProducts";
import DisplayItem from "../../components/selectItem/DisplayItem";
import {
  chairPartsData,
  sofaSetsData,
  carpetsData,
  chairsData,
  tablesData,
  curtainsData,
  doubleBedData,
} from "../../productData";

export default function Product() {
  const { category, id } = useParams();
  console.log("slug", id, category);
  return (
    <>
      {category === "chairs" && (
        <CategoryProducts>
          <DisplayItem id={id} data={chairsData} />
        </CategoryProducts>
      )}
      {category === "tables" && (
        <CategoryProducts>
          <DisplayItem id={id} data={tablesData} />
        </CategoryProducts>
      )}
      {category === "curtains" && (
        <CategoryProducts>
          <DisplayItem id={id} data={curtainsData} />
        </CategoryProducts>
      )}
      {category === "carpets" && (
        <CategoryProducts>
          <DisplayItem id={id} data={carpetsData} />
        </CategoryProducts>
      )}
      {category === "sofa-sets" && (
        <CategoryProducts>
          <DisplayItem id={id} data={sofaSetsData} />
        </CategoryProducts>
      )}
      {category === "chair-parts" && (
        <CategoryProducts>
          <DisplayItem id={id} data={chairPartsData} />
        </CategoryProducts>
      )}
      {category === "double-beds" && (
        <CategoryProducts>
          <DisplayItem id={id} data={doubleBedData} />
        </CategoryProducts>
      )}
    </>
  );
}
