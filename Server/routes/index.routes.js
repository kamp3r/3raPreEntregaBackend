const ProductRouter = require('./product.routes');
const UserRouter = require('./auth.routes');

const routerAPI = (app) => {
  app.use('/api/products', ProductRouter);
  app.use('/', UserRouter);
};

module.exports = routerAPI;