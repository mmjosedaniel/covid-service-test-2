const express = require('express');

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

app.listen(PORT, console.log(`Server startet at port ${PORT}`));
