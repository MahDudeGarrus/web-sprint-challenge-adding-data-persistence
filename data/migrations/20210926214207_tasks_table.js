
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
      table.increments('task_id')
      table.string('task_description', 256)
        .notNullable()
      table.string('task_notes', 256)
      table.boolean('task_completed')
        // .defaultTo(false)
      table.integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
};
