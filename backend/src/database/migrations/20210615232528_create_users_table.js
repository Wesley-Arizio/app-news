exports.up = async function (knex) {
  await knex.schema.hasTable("users").then((exists) => {
    if (!exists) {
      return knex.schema.createTable("users", (table) => {
        table.uuid("id").primary().unique().notNullable();
        table.string("name").notNullable();
        table.string("email").notNullable();
      });
    }
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
};
