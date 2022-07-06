const ProductRouter = require('./product.routes');
const AuthRouter = require('./auth.routes');
const ejsRouter = require('./ejs.routes');

const routerAPI = (app) => {
  app.use('/api/products', ProductRouter);
  app.use('/', AuthRouter);
  app.use('/', ejsRouter);
};

module.exports = routerAPI;