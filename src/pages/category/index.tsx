import React from "react";
import { useParams } from "react-router-dom";
import { CategoryProducts } from "../../components/CategoryProductsLayout/CategoryProducts";
import HomePage from "../../components/HomePage";
import {
  chairPartsData,
  sofaSetsData,
  carpetsData,
  chairsData,
  tablesData,
  curtainsData,
  doubleBedData,
} from "../../productData";

export default function Category() {
  const { category }: { category: string } = useParams();
  return (
    <>
      {category === "chairs" && (
        <CategoryProducts>
          <HomePage type={category} category={chairsData} />
        </CategoryProducts>
      )}
      {category === "tables" && (
        <CategoryProducts>
          <HomePage type={category} category={tablesData} />
        </CategoryProducts>
      )}
      {category === "curtains" && (
        <CategoryProducts>
          <HomePage type={category} category={curtainsData} />
        </CategoryProducts>
      )}
      {category === "carpets" && (
        <CategoryProducts>
          <HomePage type={category} category={carpetsData} />
        </CategoryProducts>
      )}
      {category === "sofa-sets" && (
        <CategoryProducts>
          <HomePage type={category} category={sofaSetsData} />
        </CategoryProducts>
      )}
      {category === "chair-parts" && (
        <CategoryProducts>
          <HomePage type={category} category={chairPartsData} />
        </CategoryProducts>
      )}
      {category === "double-beds" && (
        <CategoryProducts>
          <HomePage type={category} category={doubleBedData} />
        </CategoryProducts>
      )}
    </>
  );
}
