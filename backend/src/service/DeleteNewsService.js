const UserRepository = require('../repository/UserRepository');
const NewsRepository = require('../repository/NewsRepository');

class DeleteNewsService {
    constructor() {
        this.userRepository = new UserRepository();
        this.newsRepository = new NewsRepository();
    }

    async execute(userId, newsId) {
        const user = await this.userRepository.getUserById(userId);

        if (!user) {
            throw new Error('User Not Found');
        }

        const news = await this.newsRepository.getSpecificNews(newsId);

        if (!news) {
            throw new Error('News Not Found');
        }

        if (news.user_id !== user.id) {
            throw new Error('Request Not Allowed - Invalid User')
        }

        const deleted = await this.newsRepository.deleteNews(userId, newsId);

        return !!deleted;
    }
}

module.exports = DeleteNewsService;