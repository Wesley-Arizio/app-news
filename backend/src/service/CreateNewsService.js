const NewsRepository = require("../repository/NewsRepository");
const UserRepository = require("../repository/UserRepository");

class CreateNewService {
  constructor() {
    this.newsRepository = new NewsRepository();
    this.userRepository = new UserRepository();
  }

  async execute(data) {
    const [createdNews] = await this.newsRepository.createNews(
      {
        title: data.title,
        body: data.body,
      },
      data.userId
    );

    return createdNews;
  }
}

module.exports = CreateNewService;
