var db = require("../models");

module.exports = function(app) {
  // Get all tasks
  app.get("/api/tasks", function(req, res) {
    db.Task.findAll({}).then(function(dbTasks) {
      res.json(dbTasks);
    });
  });

  // Create a new task
  app.post("/api/tasks", function(req, res) {
    // req.body object should have at least:
    // title
    // but can have:
    // description
    db.Task.create(req.body).then(function(dbTasks) {
      console.log(dbTasks);
      res.redirect("/");
    });
  });

  // Delete a task by id
  app.delete("/api/tasks/:id", function(req, res) {
    db.Task.destroy({
      where: { id: req.params.id }
    }).then(function(dbTasks) {
      res.json(dbTasks);
    });
  });
};
