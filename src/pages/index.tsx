import React from "react";
import CommonHeroSection from "../components/CommonHeroSection";
import { HeroSection } from "../components/HeroSection";
import Layout from "../components/layout/Layout";
import {
  CarpetSection,
  ChairPartSection,
  ChairSection,
  CurtainSection,
  DoubleBedSection,
  SofaSetSection,
  TableSection,
} from "../data";

const sectionData = [
  {
    name: ChairSection,
    slide: 3,
  },
  {
    name: TableSection,
    slide: 1,
  },
  {
    name: DoubleBedSection,
    slide: 1,
  },
  {
    name: SofaSetSection,
    slide: 1,
  },
  {
    name: CarpetSection,
    slide: 1,
  },
  {
    name: CurtainSection,
    slide: 1,
  },
  {
    name: ChairPartSection,
    slide: 1,
  },
];
export default function Index() {
  return (
    <Layout>
      <HeroSection />
      {sectionData.map((data, index) => (
        <CommonHeroSection
          key={`section-id-${index}`}
          sliderContent={data.name}
          slideToShow={data.slide}
        />
      ))}
    </Layout>
  );
}
