const express = require('express');
const routerAPI = require('../routes/index.routes');
const {
  boomErrorHandler,
  logErrors,
} = require('../middlewares/error.middleware');

const connectMiddleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  require('../auth');
  routerAPI(app);
  app.use(logErrors);
  app.use(boomErrorHandler);
};

module.exports = connectMiddleware;
