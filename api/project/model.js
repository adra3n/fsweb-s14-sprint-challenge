// `Proje` modeli buraya
const db = require('../../data/dbConfig')

async function getAll() {
  const projects = await db('projects')
  const updatedProjects = projects.map((p) => {
    if (p.project_completed == 0) {
      return (p.project_completed = false)
    } else {
      return (p.project_completed = true)
    }
  })
  return updatedProjects
}

async function create(project) {
  const [project_id] = await db('projects').insert(project)

  const createdProject = await db('projects')
    .where('project_id', project_id)
    .first()

  if (createdProject.project_completed == 0) {
    createdProject.project_completed = false
  } else {
    createdProject.project_completed = true
  }
  return createdProject
}

module.export = {
  getAll,
  create,
}
