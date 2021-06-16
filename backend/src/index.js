const { ApolloServer, gql } = require("apollo-server");
const { resolvers } = require("./graphql/resolvers/news");
const { typeDefs } = require("./graphql/typedefs/news");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
