const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { errors } = require("celebrate");

const routes = require("./routes");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(bodyParser.json());
    this.server.use(morgan("dev"));
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
    this.server.use(errors());
  }
}

module.exports = new App().server;
