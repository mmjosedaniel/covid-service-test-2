const CovidCase = require('../models/CovidCase')

class CovidCaseDBService {
	async getFilteredCovidCases(typeOfFilter) {
		const covidCases = await CovidCase.findAll();

		switch(typeOfFilter) {
			case "female":
				return covidCases.filter(val => val.sexo === "F");
			case "male":
				return covidCases.filter(val => val.sexo === "M")
			}
		
		return {"error": "wrong filter", "filters": "female, male"};
	}
}

module.exports = CovidCaseDBService;
