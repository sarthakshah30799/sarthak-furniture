import {
  chairPartsData,
  sofaSetsData,
  carpetsData,
  chairsData,
  tablesData,
  curtainsData,
  doubleBedData,
} from "../productData";
import { ChairDescription } from "../components/chairs";

export const getMockDataForProducts = (category: string) => {
  switch (category) {
    case "tables": {
      return {
        data: tablesData,
        description: (chair) => <ChairDescription chair={chair} />,
      };
    }
    case "curtains": {
      return {
        data: curtainsData,
        description: (chair) => <ChairDescription chair={chair} />,
      };
    }
    case "carpets": {
      return {
        data: carpetsData,
        description: (chair) => <ChairDescription chair={chair} />,
      };
    }
    case "sofa-sets": {
      return {
        data: sofaSetsData,
        description: (chair) => <ChairDescription chair={chair} />,
      };
    }
    case "chair-parts": {
      return {
        data: chairPartsData,
        description: (chair) => <ChairDescription chair={chair} />,
      };
    }
    case "double-beds": {
      return {
        data: doubleBedData,
        description: (chair) => <ChairDescription chair={chair} />,
      };
    }
    default:
      return {
        data: chairsData,
        description: (chair) => <ChairDescription chair={chair} />,
      };
  }
};
