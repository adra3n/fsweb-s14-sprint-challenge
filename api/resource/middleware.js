const db = require('../../data/dbConfig')

async function checkUniqueName(req, res, next) {
  try {
    const { resource_name } = req.body
    const isResourceNameExist = await db('resources')
      .where('resource_name', resource_name)
      .first()
    if (isResourceNameExist) {
      res.status(400).json({ message: 'resource_name exists' })
    } else {
      next()
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  checkUniqueName,
}
