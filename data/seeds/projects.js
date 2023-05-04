/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  const defaultProjects = [
    {
      project_name: 'Oyun projesi',
      project_description: 'React ile bir oyun tasarımı',
    },
    {
      project_name: 'Portfolyo sitesi',
      project_description: 'Kendim için portfolyo web sitesi tasarla',
    },
  ]

  const defaultResources = [
    {
      resource_name: 'Javascript',
      resource_description: 'Javascript kodu ile çalışma',
    },
    {
      resource_name: 'React',
      resource_description: 'Dinamik web uygulamaları için kullan',
    },
  ]

  const defaultTasks = [
    {
      task_description: 'React ile componentları planla',
      task_notes: 'Reduxtan yararlanabilirsin',
      project_id: 1,
    },
    {
      task_description: 'Site için css yaz',
      task_notes: 'Tailwind ile',
      project_id: 2,
    },
  ]

  const defaultProjectResources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 2, resource_id: 1 },
    { project_id: 2, resource_id: 2 },
  ]
  await knex('projects').insert(defaultProjects)
  await knex('resources').insert(defaultResources)
  await knex('tasks').insert(defaultTasks)
  await knex('project_resources').insert(defaultProjectResources)
}
