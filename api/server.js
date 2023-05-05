// serverı buraya yazın ve index.js require yazın
const express = require('express')
const server = express()
server.use(express.json())

const ResourceRouter = require('./resource/router.js')
const ProjectRouter = require('./project/router.js')
const TaskRouter = require('./task/router.js')

server.use('/api/resource/', ResourceRouter)
server.use('/api/project/', ProjectRouter)
server.use('/api/task/', TaskRouter)

module.exports = server
