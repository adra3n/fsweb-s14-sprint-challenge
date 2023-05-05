/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('project_resources').truncate()
  await knex('tasks').truncate()
  await knex('resources').truncate()
  await knex('projects').truncate()

  const defaultProjects = [
    {
      project_name: 'Oyun projesi',
      project_description: 'React ile bir oyun tasarımı',
    },
    {
      project_name: 'Portfolyo sitesi',
      project_description: 'Kendin için portfolyo web sitesi tasarla',
    },
  ]

  const defaultResources = [
    {
      resource_name: 'Javascript',
      resource_description: 'Javascript ile çalış',
    },
    {
      resource_name: 'React',
      resource_description: 'Dinamik web uygulamaları için kullanabilirsin',
    },
  ]

  const defaultTasks = [
    {
      task_description: 'React ile componentları düzenle',
      task_notes: 'Reduxtan yararlanabilirsin',
      project_id: 1,
    },
    {
      task_description: 'Arayüz için css/html yaz',
      task_notes: 'Tailwind kullanabilirsin',
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
