const express = require('express');
const CovidJsonService = require('./CovidJsonService');

// Database
const db = require('./config/database')

const app = express();
const PORT = 3000;

// Test DB
db.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch(err => console.error('Unable to connect to the database:', error));

const covidJsonService = new CovidJsonService();

app.get('/', async (req, res) => {
	res.json(await covidJsonService.fetchCovidCases());
});

app.listen(PORT, console.log(`Server startet at port ${PORT}`));
