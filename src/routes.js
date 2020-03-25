const { Router } = require("express");
const routes = new Router();

const OngController = require("./controllers/OngController");

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

module.exports = routes;
