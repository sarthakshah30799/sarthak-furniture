import React from "react";
import { useParams } from "react-router-dom";
import Index from "..";
import { CategoryProducts } from "../../components/CategoryProductsLayout/CategoryProducts";
import HomePage from "../../components/HomePage";

const data = [
  "./assets/chair-section/chair-image-1.jpeg",
  "./assets/chair-section/chair-image-1.jpeg",
  "./assets/chair-section/chair-image-1.jpeg",
  "./assets/chair-section/chair-image-1.jpeg",
  "./assets/chair-section/chair-image-1.jpeg",
  "./assets/chair-section/chair-image-1.jpeg",
  "./assets/chair-section/chair-image-1.jpeg",
  "./assets/chair-section/chair-image-1.jpeg",
  "./assets/chair-section/chair-image-1.jpeg",
  "./assets/chair-section/chair-image-1.jpeg",
];
export default function Category() {
  const { category } = useParams();
  return (
    <>
      {category === "Chairs" && (
        <CategoryProducts>
          <HomePage category={data} />
        </CategoryProducts>
      )}
    </>
  );
}
