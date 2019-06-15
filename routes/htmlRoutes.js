var db = require("../models");

module.exports = function(app) {
  // Load index page -- moved to authController.js file
  /* app.get("/", function(req, res) {
    db.Task.findAll({}).then(function(dbTasks) {
      for (var i = 0; i < dbTasks.length; i++) {
        console.log(dbTasks[i].dataValues);
      }
      res.render("index", {
        msg: "Welcome!",
        tasks: dbTasks
      });
    });
  });*/
  /*
  //sign-up page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  //sign-in page
  app.get("/signin", function(req, res) {
    res.render("signin");
  });*/

  // Load task page and pass in an task by id
  /*app.get("/task/:id", function(req, res) {
    db.Task.findOne({
      where: { id: req.params.id }
    }).then(function(dbTask) {
      res.render("task", {
        task: dbTask
      });
    });
  });*/

  app.get("/task/:title", function(req, res) {
    db.Task.findOne({
      where: { task: req.params.task }
    }).then(function(dbTask) {
      res.render("task", {
        task: dbTask
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
