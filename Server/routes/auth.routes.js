const AuthRouter = require("express").Router();
const passport = require("passport");
const upload = require("../middlewares/multer.middleware");
const { userHandler } = require("../daos");
const validatorSchema = require("../middlewares/validatorSchema.middleware");
const {
  createUserSchema,
  updateUserSchema,
} = require("../schemas/user.schema");


AuthRouter.post("/register",upload.single('picture'), validatorSchema(createUserSchema), passport.authenticate('signup',{ successRedirect: "/login", failureRedirect: "/register", passReqToCallback: true }),
  
);

AuthRouter.post('/login', passport.authenticate('signin',{ successRedirect: "/profile", failureFlash: "/login", passReqToCallback: true}))

AuthRouter.patch('/profile/:id',upload.single('picture'), async(req, res, next) => {
    try {
        const user = await userHandler.updateUser(req.params.id, req.body);
        res.redirect('/profile');
      } catch (error) {
        next(error);
      }
})

module.exports = AuthRouter;
