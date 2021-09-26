//RESOURCES MIGRATION
exports.up = function(knex) {
  return knex.schema.createTable('resources', table => {
      table.increments('resource_id')
      table.string('resource_name', 128)
        .notNullable()
        .unique()
      table.string('resource_description', 256)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources')
};
