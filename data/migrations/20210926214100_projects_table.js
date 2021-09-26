// PROJECTS MIGRATION
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', table => {
      table.increments('project_id');
      table.string('project_name', 128)
        .notNullable();
      table.string('project_description', 256)
      table.bool('project_completed')
        .defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};
