const { Router } = require("express");
const routes = new Router();

routes.get("/", (req, res) => {
  res.json({ route: "/", method: "GET" });
});

module.exports = routes;
