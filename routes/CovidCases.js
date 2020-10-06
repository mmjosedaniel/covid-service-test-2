const { Router } = require('express');
const CovidCaseDBService = require('../services/CovidCaseDBService');

const router = Router();

const covidCaseDBService = new CovidCaseDBService();

router.get('/', async (req, res) => {
	res.json({"error": "wrong filter", "filters": "female, male"});
});

router.get('/:typeOfFilter', async (req, res) => {
	const { typeOfFilter } = req.params;
	const filteredCases = await covidCaseDBService.getFilteredCovidCases(typeOfFilter)
	res.json(await filteredCases.map(val => val.id_de_caso));
});

module.exports = router;
