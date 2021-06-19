const NewsRepository = require("../repository/NewsRepository");


class GetCompleteNewsDataService {
    #newsRepository;
    constructor() {
        this.#newsRepository = new NewsRepository();
    }

    async execute(newsId) {
        const completeNewsData = await this.#newsRepository.getSpecificNews(newsId);

        return {
            news: {
                id:  newsId,
                title: completeNewsData.title,
                body: completeNewsData.body,
                created_at: completeNewsData.created_at.toString(),
                updated_at: completeNewsData.updated_at.toString(),
                user_id: completeNewsData.user_id,
            },
            user: {
                id: completeNewsData.user_id,
                email: completeNewsData.email,
                name: completeNewsData.name
            }
        }
    }
}

module.exports = GetCompleteNewsDataService;