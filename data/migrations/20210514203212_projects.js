
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 256).notNullable()
        tbl.string('project_description', 2048)
        tbl.boolean('project_completed').notNullable().defaultTo(0)
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name')
        .notNullable()
        .unique()
        tbl.string('resource_description', 2048)
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description', 2048)
        .notNullable()
        tbl.string('task_notes', 2048)
        tbl.boolean('task_completed')
        .notNullable()
        .defaultTo(0)
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
    })
    .createTable('resource_assignments', tbl => {
        tbl.increments('resource_assignment_id')
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('CASCADE')
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
    })
  };
 
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('resource_assignments')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
  };


