const UserRepository = require("../repository/UserRepository");

class CreateUserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async execute(user) {
        const existingUser = await this.userRepository.getUserByEmail(user.email);

        if (existingUser) {
            throw new Error('User already Existis');
        }

        const createdUser = await this.userRepository.createUser(user.email, user.name);

        return createdUser;
    }
}

module.exports = CreateUserService;