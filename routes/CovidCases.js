const { Router } = require('express');
const CovidJsonService = require('../CovidJsonService');
const db = require('../config/database');
const CovidCase = require('../models/CovidCase');

const router = Router();

const covidJsonService = new CovidJsonService();



router.get('/', async (req, res) => {
	const temp = await covidJsonService.fetchCovidCases()
	console.log(temp[0])
	const covidCase1 = await CovidCase.create(temp[0])
	console.log(covidCase1)
	res.json(await covidJsonService.fetchCovidCases());
});

module.exports = router;