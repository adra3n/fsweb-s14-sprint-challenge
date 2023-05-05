// bu`Task` modeli buraya
const db = require('../../data/dbConfig')

async function getAll() {
  const tasks = await db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    )
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task_completed == 0) {
      tasks[i].task_completed = false
    } else {
      tasks[i].task_completed = true
    }
  }
  return tasks
}

async function create(task) {
  const [task_id] = await db('tasks').insert(task)
  const createdTask = await db('tasks').where('task_id', task_id).first()
  createdTask.task_completed == 0
    ? (createdTask.task_completed = false)
    : (createdTask.task_completed = true)

  return createdTask
}

module.exports = { getAll, create }
