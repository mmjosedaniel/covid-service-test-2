const fetch = require('node-fetch');

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
}

module.exports = CovidJsonService;
