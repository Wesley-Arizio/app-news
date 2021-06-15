import { gql } from "apollo-server";

export const typeDefs = gql`
  type News {
    title: String
    body: String
    author: String
  }

  type Query {
    news: [News]
  }
`;
