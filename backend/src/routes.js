const { Router } = require("express");
const routes = new Router();
const { celebrate, Segments, Joi } = require("celebrate");

const OngController = require("./app/controllers/OngController");
const IncidentController = require("./app/controllers/IncidentController");
const ProfileController = require("./app/controllers/ProfileController");
const SessionController = require("./app/controllers/SessionController");

routes.post(
  "/sessions",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required()
    })
  }),
  SessionController.create
);

routes.get("/ongs", OngController.index);

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentController.index
);

routes.post("/incidents", IncidentController.create);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.delete
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

module.exports = routes;
