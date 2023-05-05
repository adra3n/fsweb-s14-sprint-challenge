// `/api/tasks` router buraya
const express = require('express')
const TasksModel = require('./model.js')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const tasks = await TasksModel.getAll()
    res.status(200).json(tasks)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const createdTask = await TasksModel.create(req.body)
    res.status(201).json(createdTask)
  } catch (error) {
    next(error)
  }
})

module.exports = router
