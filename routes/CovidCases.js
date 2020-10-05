const { Router } = require('express');
const CovidJsonService = require('../services/CovidJsonService');
const db = require('../config/database');
const CovidCase = require('../models/CovidCase');

const router = Router();

const covidJsonService = new CovidJsonService();

router.get('/', async (req, res) => {
	// const temp = await covidJsonService.fetchCovidCases()
	// console.log(temp[2])
	// const covidCase1 = await CovidCase.create(temp[2])
	// console.log(covidCase1)

	// const temp = await CovidCase.findAll({
	// 	limit: 1,
	// 	order: [ [ 'id_de_caso', 'DESC' ]]
	//   });
	// console.log(temp);
	const idTest = "10";
	const temp = await covidJsonService.fetchCovidCases();

	res.json(await covidJsonService.fetchCovidCases());
});

module.exports = router;