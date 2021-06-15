import { ApolloServer, gql } from "apollo-server";
import { resolvers } from "./graphql/resolvers/news.js";
import { typeDefs } from "./graphql/typedefs/news.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
