import gql from "graphql-tag";

export const GET_ALL_CHAIRS = gql`
  query chairs {
    chairs {
      name
    }
  }
`;
