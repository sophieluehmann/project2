/*
let passport = require("passport");
//let authSession = require("passport-session");
//let authHttp = require("passport-http");
let LocalStrategy = require("passport-local").Strategy;
let GoogleStrategy = require("passport-google-oauth").OAuthStrategy;
require("dotenv").config();
var express = require("express");
var app = express();
//require('local.strategy.js')();
app.use(passport.initialize());
app.use(passport.session());

app.use(
  passSession({
    secret: "nirvana",
    saveUninitialized: true,
    resave: true
  })
);

// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(
    new LocalStrategy(function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      });
    })
  );

  passport.use(
    new GoogleStrategy(
      {
        consumerKey: clientId,
        consumerSecret: clientSecret
        // callbackURL: we'll need to figure this out
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function(err, user) {
          return done(err, user);
        });
      }
    )
  );
};
*/

//TODO: ^check out that code and implement. Craig's code above.

var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  app.get("/signup", authController.signup);
  app.get("/signin", authController.signin);
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/signup"
    })
  );
  app.get("/", isLoggedIn, authController.index);
  app.get("/logout", authController.logout);
  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/",
      failureRedirect: "/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    //console.log("are you logged in?!");
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
};
