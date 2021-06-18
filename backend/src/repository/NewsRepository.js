const { connection } = require("../database/connection");
const { v4 } = require("uuid");

class NewsRepository {
  constructor() {
    this.db = connection("news");
  }

  async getAllNews() {
    const news = await this.db.select("*");

    return news;
  }

  async getSpecificNews(id) {
    const [news] = await this.db.select("*").where("id", id);

    return news;
  }

  async saveNews(newsId, userId, newsDataToUpdate) {
    const { title, body } = newsDataToUpdate;

    const [updatedNews] = await this.db
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
    const createdNews = await this.db
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
    const deletedNews = await this.db
      .delete()
      .where('user_id', userId)
      .where('id', newsId);

    return deletedNews;
  }
}

module.exports = NewsRepository;
