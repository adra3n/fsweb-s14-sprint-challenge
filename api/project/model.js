// `Proje` modeli buraya
const db = require('../../data/dbConfig')

async function getAll() {
  const projects = await db('projects')
  console.log('_________projects________', projects)
  const updatedProjects = projects.map((p) => {
    if (p.project_completed == 0) {
      p.project_completed = false
      return p
    } else {
      p.project_completed = true
      return p
    }
  })
  console.log('_________updatedProjects________', updatedProjects)

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

module.exports = {
  getAll,
  create,
}
