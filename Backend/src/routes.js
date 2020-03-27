const express = require('express')

const {celebrate, Joi, errors, Segments} = require('celebrate')

const routes = express.Router()

const OngController = require('./Controllers/OngController')
const IncidentController = require('./Controllers/IncidentController')
const ProfileController = require('./Controllers/ProfileController')
const SessionController = require('./Controllers/SessionController')



routes.post('/session', SessionController.store)

routes.post('/ongs', celebrate({
  [Segments.BODY]:Joi.object().keys({
    name:Joi.string().required(),
    email: Joi.string().email().required(),
    whatsapp: Joi.string().required().min(10).max(15),
    city: Joi.string().required(),
    uf: Joi.string().length(2).required()
  })
}) ,OngController.store)


routes.get('/ongs', OngController.index)
routes.delete('/ongs/:id', OngController.delete)


routes.post('/incidents', IncidentController.store)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes