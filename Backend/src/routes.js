const express = require('express')

const routes = express.Router()

const OngController = require('./Controllers/OngController')



routes.post('/ongs', OngController.store)


module.exports = routes