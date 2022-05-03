import React from "react";
import { useParams } from "react-router-dom";
import { CategoryProductsLayout } from "../../components/layout/CategoryProductsLayout";
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
        <CategoryProductsLayout>
          <HomePage type={category} category={chairsData} />
        </CategoryProductsLayout>
      )}
      {category === "tables" && (
        <CategoryProductsLayout>
          <HomePage type={category} category={tablesData} />
        </CategoryProductsLayout>
      )}
      {category === "curtains" && (
        <CategoryProductsLayout>
          <HomePage type={category} category={curtainsData} />
        </CategoryProductsLayout>
      )}
      {category === "carpets" && (
        <CategoryProductsLayout>
          <HomePage type={category} category={carpetsData} />
        </CategoryProductsLayout>
      )}
      {category === "sofa-sets" && (
        <CategoryProductsLayout>
          <HomePage type={category} category={sofaSetsData} />
        </CategoryProductsLayout>
      )}
      {category === "chair-parts" && (
        <CategoryProductsLayout>
          <HomePage type={category} category={chairPartsData} />
        </CategoryProductsLayout>
      )}
      {category === "double-beds" && (
        <CategoryProductsLayout>
          <HomePage type={category} category={doubleBedData} />
        </CategoryProductsLayout>
      )}
    </>
  );
}
