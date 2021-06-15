import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type News {
    title: String
    body: String
    author: String
  }

  type Query {
    news: [News]
  }
`;

const news = [
  {
    title: "The Awakening",
    body: "Article body",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    body: "Article body",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    news: () => news,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
