import React from 'react'
import CommonSection from '../components/CommonSection'
import Layout from '../components/layout/Layout'
import { CarpetSection, ChairPartSection, ChairSection, CurtainSection, SofaSetSection, TableSection } from '../data'
import DisplayItem from '../components/selectItem/DisplayItem.jsx'
import axios from 'axios';
import { QueryClient, useQuery, QueryClientProvider, useQueryClient } from 'react-query'
import { ChairFactory } from '../API_CALL/Factory';
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

const sectionData = [
    {
        name: ChairSection,
        slide: 3
    },
    {
        name: TableSection,
        slide: 1
    },
    {
        name: SofaSetSection,
        slide: 1
    },
    {
        name: CarpetSection,
        slide: 1.
    },
    {
        name: CurtainSection,
        slide: 1.
    },
    {
        name: ChairPartSection,
        slide: 1.
    },
]
export default function Index() {
    // const { data, isLoading } = useQuery("Chairs", () => ChairFactory.getAll())
    // console.log("data", data)
    // if (isLoading) {
    //     return (<>loading</>);
    // }
    // const { data } = useQuery("SingleChair", () => ChairFactory.get("SFCHAIR0000"))
    // console.log("single data", data)
    return (
        <>
            <Layout>
                {sectionData.map((data, index) => (
                    <CommonSection key={`section-id-${index}`} SliderContent={data.name} slideToShow={data.slide} />
                ))
                }
            </Layout>
            {/* <DisplayItem data={data} /> */}
            {/* <HomePage data={data} /> */}
        </>
    )
}