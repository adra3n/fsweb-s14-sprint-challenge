/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const all = knex.schema
    .createTable('projects', (table) => {
      table.increments('project_id')
      table.string('project_name').notNullable()
      table.string('project_description')
      table.integer('project_completed').notNullable().unsigned().defaultTo(0)
    })
    .createTable('resources', (table) => {
      table.increments('resource_id')
      table.string('resource_name').notNullable().unique()
      table.string('resource_description')
    })
    .createTable('project_resources', (table) => {
      table.increments('project_resources_id')
      table.integer('project_id').references('project_id').inTable('projects')
      table
        .integer('resource_id')
        .references('resource_id')
        .inTable('resources')
    })
    .createTable('tasks', (table) => {
      table.increments('task_id')
      table.string('task_description').notNullable()
      table.string('task_notes')
      table
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('project_id')
        .inTable('projects')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
}
