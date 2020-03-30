import express from 'express';
import OngController from './Controllers/OngController';
import IncidentController from './Controllers/IncidentController';
import ProfileController from './Controllers/ProfileController';
import SessionController from './Controllers/SessionController';

import OngValidator from './Validators/OngValidators';

const routes = express.Router();

routes.post('/session', SessionController.store);

routes.post('/ongs', OngValidator.create, OngController.store);
routes.get('/ongs', OngController.index);
routes.delete('/ongs/:id', OngController.delete);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', OngValidator.page, IncidentController.index);
routes.delete('/incidents/:id', OngValidator.delete, IncidentController.delete);

routes.get('/profile', OngValidator.headerValidator, ProfileController.index);

export default routes;
