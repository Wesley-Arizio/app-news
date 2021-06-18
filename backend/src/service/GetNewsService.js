const NewsRepository = require("../repository/NewsRepository");

class GetNewsService {
  constructor() {
    this.newsRepository = new NewsRepository();
  }

  async execute() {
    const news = await this.newsRepository.getAllNews();

    return news;
  }
}

module.exports = GetNewsService;
