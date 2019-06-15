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
    var myTitles = [];
    for (var i = 0; i < dbTasks.length; i++) {
      var title = dbTasks[i].dataValues.title;
      if (!myTitles.includes(title)) {
        myTitles.push(title);
      }
    }
    var handlebarsArray = [];
    for (var i = 0; i < myTitles.length; i++) {
      var result = dbTasks.filter(function(task) {
        if (task.title === myTitles[i]) {
          console.log(task.dataValues);
          return true;
        } else {
          return false;
        }
      });
      var adjResult = result.map(function(data) {
        return data.dataValues;
      });
      var newObject = { title: myTitles[i], tasks: adjResult };
      handlebarsArray.push(newObject);
    }
    console.log(handlebarsArray);
    //console.log(myTitles);
    res.render("index", {
      msg: "Welcome!",
      tasksArray: handlebarsArray
    });
  });
};

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect("/");
  });
};
