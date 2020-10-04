const { Router } = require('express');
const CovidJsonService = require('../CovidJsonService');
const db = require('../config/database');


const router = Router();

const covidJsonService = new CovidJsonService();
const CovidCase = require('../models/CovidCase');


router.get('/', async (req, res) => {
	// const temp = await covidJsonService.fetchCovidCases()
	// console.log(temp[2])
	// const covidCase1 = await CovidCase.create(temp[2])
	// console.log(covidCase1)

	const temp = await CovidCase.findAll({
		limit: 1,
		order: [ [ 'id', 'DESC' ]]
	  });
	console.log(temp);

	res.json(await covidJsonService.fetchCovidCases());
});

module.exports = router;