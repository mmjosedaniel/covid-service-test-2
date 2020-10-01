const { Router } = require('express');
const CovidJsonService = require('../CovidJsonService');

const router = Router();

const covidJsonService = new CovidJsonService();

router.get('/', async (req, res) => {
	res.json(await covidJsonService.fetchCovidCases());
});

module.exports = router;