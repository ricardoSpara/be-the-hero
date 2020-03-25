const { Router } = require("express");
const routes = new Router();

const OngController = require("./app/controllers/OngController");
const IncidentController = require("./app/controllers/IncidentController");
const ProfileController = require("./app/controllers/ProfileController");
const SessionController = require("./app/controllers/SessionController");

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;
