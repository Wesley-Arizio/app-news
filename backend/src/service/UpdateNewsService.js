const NewsRepository = require("../repository/NewsRepository");
const UserRepository = require('../repository/UserRepository');

class UpdateNewsService {
  constructor() {
    this.newsRepository = new NewsRepository();
    this.userRepository = new UserRepository();
  }

  async execute({ newsId, newsDataToUpdate, userId }) {
    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new Error('User Not Found');
    }

    const news = await this.newsRepository.getSpecificNews(newsId);

    if (!news) {
      throw new Error("News Not Found");
    }

    if (news.user_id !== user.id) {
      throw new Error('Request Not Allowed - Invalid User')
    }

    const udpatedNews = await this.newsRepository.saveNews(
      newsId,
      userId,
      newsDataToUpdate
    );

    return udpatedNews;
  }
}

module.exports = UpdateNewsService;
