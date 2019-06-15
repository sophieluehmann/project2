var db = require("../models");

var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signin");
};

exports.index = function(req, res) {
  console.log("something new ");
  console.log(req.user.id);
  db.Task.findAll({
    where: {
      userId: req.user.id
    }
  }).then(function(dbTasks) {
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
