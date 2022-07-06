const ejsRouter = require('express').Router();

ejsRouter.get('/', (req, res) => {
    res.render('home');
});

module.exports = ejsRouter;