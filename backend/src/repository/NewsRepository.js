const { connection } = require("../database/connection");
const { v4 } = require("uuid");

class NewsRepository {
  #NewsModel;
  constructor() {
    this.#NewsModel = connection("news");
  }

  async getAllNews() {
    const news = await this.#NewsModel.select("*");

    return news;
  }

  async getSpecificNews(id) {
    const [news] = await this.#NewsModel.select("*").where("news.id", id).innerJoin('users', 'users.id', 'news.user_id');

    return news;
  }

  async saveNews(newsId, userId, newsDataToUpdate) {
    const { title, body } = newsDataToUpdate;

    const [updatedNews] = await this.#NewsModel
      .update({
        title,
        body,
      })
      .where("id", newsId)
      .where('user_id', userId)
      .returning("*");

    return updatedNews;
  }

  async createNews(newsToCreate, userId) {
    const createdNews = await this.#NewsModel
      .insert({
        id: v4(),
        title: newsToCreate.title,
        body: newsToCreate.body,
        user_id: userId,
      })
      .returning("*");

    return createdNews;
  }

  async deleteNews(userId, newsId) {
    const deletedNews = await this.#NewsModel
      .delete()
      .where('user_id', userId)
      .where('id', newsId);

    return deletedNews;
  }
}

module.exports = NewsRepository;
