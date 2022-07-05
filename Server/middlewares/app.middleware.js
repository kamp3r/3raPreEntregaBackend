const express = require('express');
const routerAPI = require('../routes/index.routes');
const cors = require('cors');
const {
  boomErrorHandler,
  logErrors,
} = require('../middlewares/error.middleware');
const passport = require('passport');
const connectSession = require('../auth/session/session.js');

const connectMiddleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); 
  app.use(cors())
  require('../auth');
  connectSession(app);
  app.use(passport.initialize());
  app.use(passport.session());
  routerAPI(app);
  app.use(logErrors);
  app.use(boomErrorHandler);
};

module.exports = connectMiddleware;
