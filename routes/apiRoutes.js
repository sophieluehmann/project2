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

  app.post("/api/tasks/:title", function(req, res) {
    // req.body object should have at least:
    // title
    // but can have:
    // description
    // eslint-disable-next-line camelcase
    console.log(req.params.title);
    var title = req.params.title;
    //var task_id = req.params.id;
    var description = req.body.description;
    console.log(description);
    // eslint-disable-next-line camelcase
    db.Task.create({ title: title, description: description })
      .then(function(dbTasks) {
        console.log(dbTasks);
        res.redirect("/");
      })
      .catch(function(err) {
        console.log(err, id + description);
      });
  });

  // Delete a task by id
  app.delete("/api/tasks/:id", function(req, res) {
    db.Task.destroy({
      where: { id: req.params.id }
    })
      .then(function(dbTasks) {
        console.log(dbTasks);
        res.status(200).send(`Deleted task: ${dbTasks}`);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send(`Server Error: ${err}`);
      });
  });

  // Update a task by id
  app.post("/api/tasks/:id", function(req, res) {
    db.Task.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(dbTasks) {
        console.log(dbTasks);
        res.redirect("/");
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send(`Server Error: ${err}`);
      });
    console.log(req.body);
  });

  // Complete a task
  app.put("/api/tasks/complete/:id", function(req, res) {
    db.Task.update(
      { complete: true },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(function(dbTasks) {
        console.log(dbTasks);
        res.status(200).send(`Completed task: ${dbTasks}`);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send(`Server Error: ${err}`);
      });
  });

  // Change completed task to incomplete
  app.put("/api/tasks/incomplete/:id", function(req, res) {
    db.Task.update(
      { complete: false },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(function(dbTasks) {
        console.log(dbTasks);
        res.status(200).send(`Task moved to incomplete: ${dbTasks}`);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send(`Server Error: ${err}`);
      });
  });
};
