# READ ME for Group 1 Project 2

## Project /Task Tracker with timer: (Name to follow)

### High Level Requirements: 

1.	Register / Login for users ( use passport.js)
2.	CRUD – Projects, Tasks, (subtasks?)
3.	Track properties for Projects/tasks – e.g. due date, description, 
4.	Implement timer to track task duration.  (must account for breaks or multi day efforts)\
5.	Track task completion – partial completion, not started, overdue
6.	Analytics -  how much time spent on a task. Create some sort of graphical representation (use chart.js)

## Start the app locally:
- create the db in your local mysql with `models/schema.sql`
- update your mysql password in `config/config.json`
- run this command in the project root: `npx sequelize-cli db:migrate`
- no seeds yet
- run `npm test`
- then `npm start`


## Questions/Things to consider as we think about project design:

### Task Tracking:

- Under each task, you can add multiple sub-tasks, notes, and priority level, along with other basic information: 
  - Project ,Task, Subtask ?
  -	Notes, Description, Priority, categories, color coding (?) 
  -	Due date, completion date, start date (?)
  -	Task status: assigned, in progress, finished, late etc. (?) 
  
-	Can we perform the same actions on individual tasks as well as on Projects or sub Projects? Do tasks have different properties than Projects? 
-	CRUD functionality
-	Recurring tasks or managing tasks that repeat at regular intervals?
-	Sorting and organization of tasks – how do we want to implement this? 

### Timer: 

-	Track time elapsed at project, task, subtask level – do we track time for all? Add together to get total elapsed time on a project?
-	How will breaks work?  Do we need to track them in a special way?  Do we assign breaks at the task, sub-project, or project level? Or allow breaks on all three?  Can a user choose to only track breaks on a project level and not on a sub-project/task level? What will that do to the way we “track” or assign break time against total time elapsed on a project/homework effort. 
-	We need to figure out how timer will work – e.g. start when a task is “selected” or does user need to explicitly 
-	Can user “edit” time related data? What are the possible impacts if we allow this in v1.0?  

### Extras to consider:

-	Are we still planning on implementing login/sign-in/user authentication? Use Passport.js? 
-	“Karma Points” or proprietary score/flags/achievements for finishing on time? Or other game-like features to increase motivation and use?
-	Alerts? Due date alert? Late task warnings? Etc. Reminders to get working on a particular task?
-	Analytics? (could get thorny and difficult very quickly) Are there simple analytics we can do (and display) that are easy to implement?

