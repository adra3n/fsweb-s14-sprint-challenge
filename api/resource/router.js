// `/api/resources` router buraya
const express = require('express')
const ResourcesModel = require('./model.js')
const router = express.Router()
const middleware = require('./middleware.js')

router.get('/', async (req, res, next) => {
  try {
    const resources = await ResourcesModel.getAll()
    res.status(200).json(resources)
  } catch (error) {
    next(error)
  }
})

router.post('/', middleware.checkUniqueName, async (req, res, next) => {
  try {
    const createdResource = await ResourcesModel.create(req.body)
    res.status(201).json(createdResource)
  } catch (error) {
    next(error)
  }
})

module.exports = router
