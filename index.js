const express = require('express');
const CovidJsonService = require('./services/CovidJsonService');

const covidJsonService = new CovidJsonService();

// Database
const db = require('./config/database')

const app = express();
const PORT = 3000;

// Test DB
db.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch(err => console.error('Unable to connect to the database:' + err));

// routes
app.use(require('./routes/CovidCases'));

//Schedule
setInterval(function(){
	covidJsonService.insertNewValuesToDb();
	 console.log("Create query executed."); 
	},
	600000 //600000 == 10 minutos
);

app.listen(PORT, console.log(`Server startet at port ${PORT}`));
