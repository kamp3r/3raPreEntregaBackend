const { Strategy } = require("passport-local");
const { userHandler } = require("../../daos/");

const localStrategy = new Strategy({ usernameField: 'email'}, async (email, password, done) => {
    try{
        const user = await userHandler.getUser(email, password);
        done(null, user);
    }catch(error){
        done(error, false);
    }
});

module.exports = localStrategy;
