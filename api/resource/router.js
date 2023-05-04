// `/api/resources` router buraya
const express = require('express')
const ResourcesModel = require('./model.js')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const resources = await ResourcesModel.getAll()
    res.status(200).json(resources)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const createdProject = await ResourcesModel.create(req.body)
    res.status(201).json(createdProject)
  } catch (error) {
    next(error)
  }
})

module.exports = router
