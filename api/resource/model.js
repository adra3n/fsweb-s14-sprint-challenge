// `Resource` modeli buraya
const db = require('../../data/dbConfig')

async function getAll() {
  return await db('resources')
}

async function create(resource) {
  const [resource_id] = await db('resources').insert(resource)
  const createdResource = await db('resources')
    .where('resource_id', resource_id)
    .first()
  return createdResource
}

module.exports = {
  getAll,
  create,
}
