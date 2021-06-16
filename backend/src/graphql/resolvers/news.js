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

module.exports = {
  resolvers,
  news,
};
