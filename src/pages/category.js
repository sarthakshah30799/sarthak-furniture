import React from 'react'
import { useParams } from 'react-router-dom';
import HomePage from '../components/HomePage';

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
]
export default function Category() {
    console.log("use para", useParams())
    const { category } = useParams();
    console.log("category page call", category)
    return (
        <>
            {category === "chairs" && (<HomePage data={data} />)}
        </>
    )
}