const { Strategy } = require("passport-local");
const passport = require("passport");
const { userHandler } = require("../../daos/");

const localStrategy = new Strategy({ usernameField: 'email'}, async (email, password, done) => {
    try{
        const user = await userHandler.getUser(email, password);
        done(null, user);
    }catch(error){
        done(error, false);
    }
});

passport.serializeUser((user, done) => {
    done(null, user._id);
})

passport.deserializeUser(async (id, done) => {
    const user = await userHandler.getUserById(id);
    done(null, user);
})

module.exports = localStrategy;
