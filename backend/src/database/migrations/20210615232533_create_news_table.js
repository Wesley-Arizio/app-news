exports.up = async function (knex) {
  await knex.schema.hasTable("news").then((exists) => {
    if (!exists) {
      return knex.schema.createTable("news", (table) => {
        table.uuid("id").primary().unique().notNullable();
        table.string("title").notNullable();
        table.string("body", 5000).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
        table.uuid("user_id").unsigned();
        table
          .foreign("user_id")
          .references("id")
          .inTable("users")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
    }
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("news");
};
