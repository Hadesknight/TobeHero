import { celebrate, Segments, Joi } from 'celebrate';

export default {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
};
