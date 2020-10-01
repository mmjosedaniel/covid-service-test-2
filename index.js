const express = require('express');
const { Sequelize } = require('sequelize');
const CovidJsonService = require('./CovidJsonService');


const app = express();
const PORT = 3000;

// Sequelize:
const sequelize = new Sequelize('covid_cases', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
});

sequelize.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch(err => console.error('Unable to connect to the database:', error));

const covidJsonService = new CovidJsonService();

app.get('/', async (req, res) => {
	res.json(await covidJsonService.fetchCovidCases());
});

app.listen(PORT, console.log(`Server startet at port ${PORT}`));
