const fetch = require('node-fetch');
const db = require('../config/database');
const CovidCase = require('../models/CovidCase')

class CovidJsonService {
    constructor() {
        this.URI = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
    }
    /**
     * Get all the COVID-19 cases from the COVID-19 API 
     * https://www.datos.gov.co/resource/gt2j-8ykr.json
     * 
     * @return json object with al the COVID-19 cases.
     */
     async fetchCovidCases() {
        const response = await fetch(this.URI);
        const cases = await response.json();
        return cases
    }

    async insertNewValuesToDb() {
        const [{id_de_caso}] = await CovidCase.findAll({
            limit: 1,
            order: [ [ 'id_de_caso', 'DESC' ]]
        });

        console.log(id_de_caso);

        const webJsonQuery = await this.fetchCovidCases();

        const newCovidCases = await webJsonQuery.filter(value => parseInt(value["id_de_caso"]) > parseInt(id_de_caso))
        return newCovidCases;
    }
}

module.exports = CovidJsonService;
