const { connection } = require("../database/connection");
const { v4 } = require("uuid");

class UserRepository {
  #UsersModel;
  constructor() {
    this.#UsersModel = connection("users");
  }

  async getUserByEmail(email) {
    const [user] = await this.#UsersModel.select("*").where("email", email);

    return user;
  }

  async createUser(email, name) {
    const [createdUser] = await this.#UsersModel
      .insert({
        id: v4(),
        email,
        name,
      })
      .returning("*");

    return createdUser;
  }

  async getUserById(userId) {
    const [user] = await this.#UsersModel.select("*").where("id", userId);

    return user;
  }
}

module.exports = UserRepository;
