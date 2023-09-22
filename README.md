Questions :
In a README in your repo, answer the following (DO NOT IMPLEMENT)
How would your tables and apis change for the following scenarios. What tables and api endpoints would you add? Which tables and api endpoints would need to be updated?
If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed
If users can comment on tasks
How will you do error handling?

Answer 1
answer for the first question is if we want to implement the 4 stages process (Read > Working > Reviewing > Completed) insted of 3 stage process (Open > In Progress > Done) . we have to modify the main task table in which we are manage all the tasks of perticular user we have to make 4 status for this task
and for the endpoints of apis 
we have to slightly modify the apis 
we just have to respond the current status of task that in which stage the task is currently perfoming.

Answer 2
we have to create a sepreate comment table in which we are storing all the comment with user id and task id so that we have a track of every comment

Answer 3 
error handling is very difficult task in react js
generally i am using try and catch method for error handling 
and use of await async method for proper api loading
and provide proper filter in database so that any false information not enterd in database because it may cause unwanted error in future
like if you are taking phone number of any user and it enterd 12 digit so it will cause error in future

so this are the answer of your all question in best of my knowlage
thank you

hosted link:https://zuddle-task.vercel.app/