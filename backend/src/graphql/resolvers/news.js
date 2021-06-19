const GetNewsService = require("../../service/GetNewsService");
const UpdateNewsService = require("../../service/UpdateNewsService");
const CreateNewService = require("../../service/CreateNewsService");
const CreateUserService = require("../../service/CreateUserService");
const DeleteNewsService = require("../../service/DeleteNewsService");
const UserSessionService = require("../../service/UserSessionService");
const GetCompleteNewsDataService = require('../../service/GetCompleteNewsDataService');

const resolvers = {
  Query: {
    news: async () => {
      try {
        const getNewsService = new GetNewsService();

        const news = await getNewsService.execute();

        return news;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    newsData: async (_, { newsId }) => {
      try {
        const getCompleteNewsDataService = new GetCompleteNewsDataService();

        const news = await getCompleteNewsDataService.execute(newsId);

        return news;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  },

  Mutation: {
    updateNews: async (_, { newsId, userId, newsDataToUpdate }) => {
      try {
        const updateNewsService = new UpdateNewsService();

        const updatedNews = await updateNewsService.execute({
          newsId,
          newsDataToUpdate,
          userId
        });

        return updatedNews;
      } catch (error) {
        throw new Error(error.message);
      }
    },

    createNews: async (_, { data }) => {
      try {
        const createNewsService = new CreateNewService();

        const created = createNewsService.execute(data);

        return created;
      } catch (error) {
        throw new Error(error.message);
      }
    },

    createUser: async (_, { user }) => {
      try {
        const createUserService = new CreateUserService();

        const createUser = await createUserService.execute(user)

        return createUser;
      } catch (error) {
        throw new Error(error.message);
      }
    },

    deleteNews: async (_, { userId, newsId }) => {
      try {

        const deleteNewsService = new DeleteNewsService();

        const deletedNews = await deleteNewsService.execute(userId, newsId);

        return deletedNews;
      } catch (error) {
        throw new Error(error.message);
      }
    },

    userSession: async (_, { email }) => {
      try {
        const userSessionService = new UserSessionService();

        const session = await userSessionService.execute(email);

        return session;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  },
};

module.exports = {
  resolvers,
};
