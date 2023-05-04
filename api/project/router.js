//  `/api/projects` router buraya

const express = require('express')
const ProjectsModel = require('./model.js')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const projects = await ProjectsModel.getAll()
    res.status(200).json(projects)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    if (!req.body.project_name) {
      res.status(400).json({ message: 'eksik alan var' })
    } else {
      const createdProject = await ProjectsModel.create(req.body)
      res.status(201).json(createdProject)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
