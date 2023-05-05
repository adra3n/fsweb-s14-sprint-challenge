// DEĞİŞTİRMEYİN
const knex = require('knex')
const configurations = require('../knexfile.js')
const environment = process.env.NODE_ENV || 'development'

// Gerçekte hangi knex yapılandırması kullanılıyor?
// Bu, process.env.NODE_ENV'nin değerine bağlıdır!
module.exports = knex(configurations[environment])
