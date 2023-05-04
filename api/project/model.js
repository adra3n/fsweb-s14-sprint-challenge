// `Proje` modeli buraya
const db = require('../../data/db-config')

async function getAll() {
  const projects = db('projects')
  let transformingProjects = allProjects.map((item) => {
    return { ...item, project_completed: item.project_completed == 1 }
  })
  return transformingProjects
}
async function create(project) {
  const [project_id] = await db('projects').insert(project)
  const createdProject = await db('projects')
    .where('project_id', project_id)
    .first()
  return {
    ...createdProject,
    project_completed: createdProject.project_completed == 1,
  }
}

module.export = {
  getAll,
  create,
}
