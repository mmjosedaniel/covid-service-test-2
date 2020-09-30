const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();

// Sequelize:
const sequelize = new Sequelize('covid_cases', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
});

sequelize.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch(err => console.error('Unable to connect to the database:', error));

app.get('/', (req, res) => res.send('Test'))

const PORT = 3000;

app.listen(PORT, console.log(`Server startet at port ${PORT}`));
