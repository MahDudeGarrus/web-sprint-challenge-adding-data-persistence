
exports.up = function(knex) {
  return knex.schema
  .createTable('project_resources', table=> {
      table.increments('pr_id')
      table.string('project_name')
        .references('project_name')
        .inTable('projects')
      table.integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table.integer('resource_id')
        .unsigned()
        .references('resource_id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_resources');
};
