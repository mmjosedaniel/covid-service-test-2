# Test 2 Express js and Squelize

## Description:

This is a test.

The test is to save each ten minutes the information that comes from a web json API into a database without repeating it and offer the results as a web json API reading it from this database.

## Development:

The first thing I did was to create an Expres js project.

Since I do not knew about Squelize, I started to look for information about it.

I found video about how to create an app with Express js and Sequelize, I used this video as an example to comprehend how to use Sequelize:

[Build a Node.js App With Sequelize [1] - Connection & Model](https://www.youtube.com/watch?v=bOHysWYMZM0).

The console threw me an error because I am using an old version of MySQL (MySQL 5.5) in a Docker container, therefore I proceeded to look for a container with an newer version of MySQL:

This is the error:

```console
Server startet at port 3000
(node:6788) [SEQUELIZE0006] DeprecationWarning: This database engine version is not supported, please update your database server. More information https://github.com/sequelize/sequelize/blob/master/ENGINE.md
Executing (default): SELECT 1+1 AS result
Connection has been established successfully.
```

After implementing a Docker container with MySQL 8.0 the conection was successful:

```console
Server startet at port 3000
Executing (default): SELECT 1+1 AS result
Connection has been established successfully.
```

Next I followed the next step:

* Create the service to get the COVID-19 API data.
* Create a model.
* Added a routes folder and a file for the routes.

I had a problem bith my docker container with MySQL, therefore I had to start solving it.

 did not know how to schedule tasks in node, therefore I look for some tool to do it, I found 'Cron' and I proceeded to install it :

[Crone](https://github.com/kelektiv/node-cron).