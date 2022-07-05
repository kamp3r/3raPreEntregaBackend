const AuthRouter = require("express").Router();
const passport = require("passport");
const { userHandler } = require("../daos");
const validatorSchema = require("../middlewares/validatorSchema.middleware");
const {
  createUserSchema,
  updateUserSchema,
} = require("../schemas/user.schema");

AuthRouter.post(
  "/register",
  validatorSchema(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      const user = await userHandler.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
);

AuthRouter.post('/login', passport.authenticate('local', {session: true}), async (req, res, next) => {
    try {
        const user = req.user;
        res.status(200).json(user);
      } catch (error) {
        next(error);
      }
})

module.exports = AuthRouter;
