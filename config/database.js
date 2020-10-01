const { Sequelize } = require('sequelize');

// Sequelize:
module.exports = new Sequelize('covid_cases', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
});