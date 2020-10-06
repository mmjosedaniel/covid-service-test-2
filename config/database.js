const { Sequelize } = require('sequelize');

// Sequelize:
module.exports = new Sequelize('covid', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
});
