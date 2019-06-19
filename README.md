App deployed on heroku: https://uwproject2.herokuapp.com/

## Task Master: The App

### High Level Requirements: 

1.	Register / Login for users ( use passport.js)
2.	CRUD – Projects, Tasks, (subtasks?)
3.	Track details for Projects/tasks
4.	Implement timer to track task duration. 
5.	Track task completion. 

## Start the app locally:
- git clone this repo into your local machine
- create the db in your local mysql with `models/schema.sql`
  * navigate to the models folder in your terminal, run `mysql -u root -p`
  * with the `mysql>` command line tool running, enter the command `source schema.sql`
  * type `exit` and enter
- update your mysql password in `config/config.json`
- run `npm install`
- run `npm test`
- run `npm start`
- open `http://localhost:3000/` in your browser to see the app


## Questions/Things to consider as we think about project design:

### Task Tracking:

- Under each task, you can add multiple sub-tasks and notes, and priority level, along with other basic information: 
  - Project, Task, Subtask
  -	Notes, Description
  -	Task status: completed, not completed  

### Extras to consider:

-	Track time elapsed at project, task, subtask level – do we track time for all? Add together to get total elapsed time on a project? 
-	“Karma Points” or proprietary score/flags/achievements for finishing on time? Or other game-like features to increase motivation and use?
-	Alerts? Due date alert? Late task warnings? Etc. Reminders to get working on a particular task?
-	Analytics? (could get thorny and difficult very quickly) Are there simple analytics we can do (and display) that are easy to implement?

