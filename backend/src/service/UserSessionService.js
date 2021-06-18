const UserRepository = require("../repository/UserRepository");

class UserSessionService {
    #userRepository;
    constructor() {
        this.#userRepository = new UserRepository();
    }

    async execute(email) {
        const user = await this.#userRepository.getUserByEmail(email);

        if (!user) {
            throw new Error('User Not Found');
        }

        return user;
    }
}

module.exports = UserSessionService;