const ejsRouter = require('express').Router();
const isAuthenticated = require('../middlewares/auth.middleware');
const { productHandler } = require('../daos');

ejsRouter.get('/', (req, res) => {
    res.redirect('/home');
})

ejsRouter.get('/home', (req, res) => {
    res.render('home', {
        title: 'home',
        user: req.user
    });

});

ejsRouter.get('/products', async (req, res) => {
    const products = await productHandler.getProducts();
    res.render('products', {
        products,
        title: 'products',
        user: req.user
    });
});

ejsRouter.get('/register', (req, res) => {
    res.render('register', {
        title: 'register',
        user: req.user
    })
})

ejsRouter.get('/login', (req, res) => {
    res.render('login', {
        title: 'login',
        user: req.user
    })
})

ejsRouter.get('/profile', isAuthenticated, (req,res)=>{
    res.render('profile', {
        title: 'profile',
        user: req.user,
    })
})

ejsRouter.get('/editProfile', isAuthenticated, (req,res)=>{
    res.render('edit', {
        PATCH: true,
        title: 'editProfile',
        user: req.user,
    })
})

ejsRouter.get('/logout', isAuthenticated, (req,res)=>{
    res.clearCookie('turbinasunmira')
    res.render('logout', {
        title: 'logout',
        user: req.user,
    })
    req.logout((err)=>{
        if(err){
            return next(err)
        }
    })
})

ejsRouter.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
        user: req.user
    })
})

ejsRouter.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'contact',
        user: req.user
    })
})

ejsRouter.get('/detail/:id', async (req, res) => {
    const product = await productHandler.getProductById(req.params.id);
    console.log(product);
    res.render('productDetail', {
        product,
        title: `${product.name}`,
        user: req.user
    })
})

module.exports = ejsRouter;