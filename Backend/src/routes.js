const express = require('express')


const routes = express.Router()

const OngController = require('./Controllers/OngController')
const IncidentController = require('./Controllers/IncidentController')
const ProfileController = require('./Controllers/ProfileController')
const SessionController = require('./Controllers/SessionController')

const OngValidator = require('./Validators/OngValidators') 

routes.post('/session', SessionController.store)

routes.post('/ongs', OngValidator.create ,OngController.store)
routes.get('/ongs', OngController.index)
routes.delete('/ongs/:id', OngController.delete)


routes.post('/incidents', IncidentController.store)
routes.get('/incidents', OngValidator.page, IncidentController.index)
routes.delete('/incidents/:id', OngValidator.delete ,IncidentController.delete)

routes.get('/profile', OngValidator.headerValidator, ProfileController.index)

module.exports = routes