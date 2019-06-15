var db = require("../models");

var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signin");
};

exports.index = function(req, res) {
  console.log("something");
  db.Task.findAll({}).then(function(dbTasks) {
    res.render("index", {
      msg: "Welcome!",
      tasks: dbTasks
    });
  });
};

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect("/");
  });
};
