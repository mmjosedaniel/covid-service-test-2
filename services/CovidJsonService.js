const fetch = require('node-fetch');
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

    /**
     * inset the new values intoi the database.
     * 
     * @return json with the new covid cases.
     */
    async insertNewValuesToDb() {
        const totalCase = await CovidCase.findAll();
        console.log(totalCase)
        let id_de_caso = "0";
        if (totalCase.length != 0) {
            [{id_de_caso}] = await CovidCase.findAll({
                limit: 1,
                order: [ [ 'id_de_caso', 'DESC' ]]
            }).catch(err => "0");
            console.log("IT IS DONE!!!")
        }

        console.log("The last id case was: " + id_de_caso);

        const webJsonQuery = await this.fetchCovidCases();

        const newCovidCases = await webJsonQuery.filter(
                value => 
                    parseInt(value["id_de_caso"]) > parseInt(id_de_caso)
            );

        await newCovidCases.map(
                val => CovidCase.create(val)
            );
        return newCovidCases;
    }
}

module.exports = CovidJsonService;
