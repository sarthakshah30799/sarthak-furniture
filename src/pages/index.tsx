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
    slide: 4,
  },
  {
    name: TableSection,
    slide: 3,
  },
  {
    name: DoubleBedSection,
    slide: 3,
  },
  {
    name: SofaSetSection,
    slide: 3,
  },
  {
    name: CarpetSection,
    slide: 3,
  },
  {
    name: CurtainSection,
    slide: 3,
  },
  {
    name: ChairPartSection,
    slide: 3,
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
