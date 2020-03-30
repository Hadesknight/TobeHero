import express from 'express';
import OngController from './Controllers/OngController';
import IncidentController from './Controllers/IncidentController';
import ProfileController from './Controllers/ProfileController';
import SessionController from './Controllers/SessionController';
import CollabController from './Controllers/CollabsController';

import OngValidator from './Validators/OngValidators';
import CollabValidator from './Validators/CollabValidator';

import authMiddleware from './middleware/auth';

const routes = express.Router();

// - Cadastro Ong
routes.post('/ongs', OngValidator.create, OngController.store);

// Login Colaboradores e Ong
routes.post('/session', OngValidator.login, SessionController.store);

//--------------------

routes.use(authMiddleware);

// -- Rota criação de Colaboradores

routes.post('/collabs', CollabValidator.create, CollabController.store);
routes.get('/collabs', CollabController.index);

//----------------------

routes.get('/ongs', OngController.index);
routes.delete('/ongs/:id', OngController.delete);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', OngValidator.page, IncidentController.index);
routes.delete('/incidents/:id', OngValidator.delete, IncidentController.delete);

routes.get('/profile', OngValidator.headerValidator, ProfileController.index);

export default routes;
