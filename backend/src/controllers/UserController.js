const connection = require("../database/connection");
const generateUniqueId = require("../utils/generateUniqueId");

module.exports = {
  async index(request, response) {
    const users = await connection("users").select("*");

    return response.json(users);
  },

  async create(request, response) {
    const { name, email } = request.body;

    const id = generateUniqueId();

    await connection("users").insert({
      id,
      name,
      email,
    });

    return response.json({ id });
  },
};
