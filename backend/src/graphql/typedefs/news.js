const { gql } = require("apollo-server");

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

module.exports = {
  typeDefs,
};
