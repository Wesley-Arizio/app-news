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

  type CompleteNewsData {
    news: News,
    user: User
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
    newsData(newsId: ID!): CompleteNewsData!
  }

  type Mutation {
    updateNews(newsId: ID!, userId: ID!, newsDataToUpdate: UpdateNewsInput!): News!
    createNews(data: CreateNewsInput!): News!
    createUser(user: CreateUserInput!): User!
    deleteNews(userId: ID!, newsId: ID!): Boolean!
    userSession(email: String): User!
  }
`;

module.exports = {
  typeDefs,
};
