const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String
  }

  type News {
    id: ID!
    title: String
    body: String
    user_id: String
    created_at: String
    updated_at: String
  }

  input UpdateNewsInput {
    title: String
    body: String
  }

  input CreateUserInput {
    email: String
    name: String
  }

  input CreateNewsInput {
    userId: String
    title: String
    body: String
  }

  type Query {
    news: [News]!
  }

  type Mutation {
    updateNews(newsId: ID!, userId: ID!, newsDataToUpdate: UpdateNewsInput!): News!
    createNews(data: CreateNewsInput!): News!
    createUser(user: CreateUserInput!): User!
    deleteNews(userId: ID!, newsId: ID!): Boolean!
  }
`;

module.exports = {
  typeDefs,
};
