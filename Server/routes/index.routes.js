const ProductRouter = require('./product.routes');
const UserRouter = require('./user.routes');

const routerAPI = (app) => {
  app.use('/api/products', ProductRouter);
  app.use('/api/users', UserRouter);
};

module.exports = routerAPI;