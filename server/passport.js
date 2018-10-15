// auth.js
var passport = require("passport");  
var passportJWT = require("passport-jwt");  
var ExtractJwt = passportJWT.ExtractJwt;  
var Strategy = passportJWT.Strategy;  
import User from './models/user';
var params = {  
    secretOrKey: 'secret',
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt")
};

module.exports = function() {  
    var strategy = new Strategy(params, function(payload, done) {
        User.findById(payload._id)
            .then(user => {
                return done(null, {
                    id: user._id
                });
            })
            .catch(err => {
                return done(err);
            });
    });
    passport.use(strategy);
    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
          console.log('passport');
            return passport.authenticate("jwt", {
              session: false
          });
        }
    };
};
