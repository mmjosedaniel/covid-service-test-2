const Sequelize = require('sequelize');
const db = require('../config/database');

const CovidCase = db.define('covid_cases', {
    id_de_caso: {
        type: Sequelize.STRING
    },
    fecha_de_notificaci_n: {
        type: Sequelize.STRING
    },
    c_digo_divipola: {
        type: Sequelize.STRING
    },
    ciudad_de_ubicaci_n: {
        type: Sequelize.STRING
    },
    departamento: {
        type: Sequelize.STRING
    },
    atenci_n: {
        type: Sequelize.STRING
    },
    edad: {
        type: Sequelize.STRING
    },
    sexo: {
        type: Sequelize.STRING
    },
    tipo: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    pa_s_de_procedencia: {
        type: Sequelize.STRING
    },
    fis: {
        type: Sequelize.STRING
    },
    fecha_diagnostico: {
        type: Sequelize.STRING
    },
    fecha_recuperado: {
        type: Sequelize.STRING
    },
    fecha_reporte_web: {
        type: Sequelize.STRING
    },
    tipo_recuperaci_n: {
        type: Sequelize.STRING
    },
    codigo_departamento: {
        type: Sequelize.STRING
    },
    codigo_pais: {
        type: Sequelize.STRING
    },
    pertenencia_etnica: {
        type: Sequelize.STRING
    },
    
});

module.exports = CovidCase;