// serverı buraya yazın ve index.js require yazın
const express = require('express')

const ResourceRouter = require('./resource/router.js')
const ProjectRouter = require('./project/router.js')
const TaskRouter = require('./task/router.js')

const server = express()

server.use(express.json())
server.use('/api/resource/', ResourceRouter)
server.use('/api/project/', ProjectRouter)
server.use('/api/task/', TaskRouter)

module.exports = server
