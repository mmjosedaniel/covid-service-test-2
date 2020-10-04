# Test 2 Express js and Squelize

## Description:

This is a test.

The test is to save each ten minutes the information that comes from a web json API into a database without repeating it and offer the results as a web json API reading it from this database.

## Development:

The first thing I did was to create an Expres js project.

Since I do not knew about Squelize, I started to look for information about it.

I found video about how to create an app with Express js and Sequelize, I used this video as an example to comprehend how to use Sequelize:

[Build a Node.js App With Sequelize [1] - Connection & Model](https://www.youtube.com/watch?v=bOHysWYMZM0).

The console threw me an error because I am using an old version of MySQL (MySQL 5.5) in a Docker container, therefore I proceeded to look for a container with an newer version of MySQL:

This is the error:

```console
Server startet at port 3000
(node:6788) [SEQUELIZE0006] DeprecationWarning: This database engine version is not supported, please update your database server. More information https://github.com/sequelize/sequelize/blob/master/ENGINE.md
Executing (default): SELECT 1+1 AS result
Connection has been established successfully.
```

After implementing a Docker container with MySQL 8.0 the conection was successful:

```console
Server startet at port 3000
Executing (default): SELECT 1+1 AS result
Connection has been established successfully.
```

Next I followed the next step:

* Create the service to get the COVID-19 API data.
* Create a model.
* Added a routes folder and a file for the routes.

I had a problem bith my docker container with MySQL, therefore I had to start solving it.

 did not know how to schedule tasks in node, therefore I look for some tool to do it, I found 'Cron' and I proceeded to install it :

[Crone](https://github.com/kelektiv/node-cron).

After testing Cron for a while, I realize it was not working appropriately, therefor, I decided to try another dependency. I did not take me much time to find Node Schedule:

[Node Schedule](https://www.npmjs.com/package/node-schedule).

While I was reading the Node Schedule documentation I found that I did not need a dependency but the method setInterval:

*"Node Schedule is for time-based scheduling, not interval-based scheduling. While you can easily bend it to your will, if you only want to do something like "run this function every 5 minutes", **you'll find setInterval much easier to use**, and far more appropriate."*

I created a create query to try Sequelize, However, I failed because I had not created the table. I thought that the data table was going to by automatically created, however I got an error, so I created a query to create it:

```console
CREATE TABLE covid_cases(
	id INT AUTO_INCREMENT PRIMARY KEY,
	id_de_caso VARCHAR(200),
	fecha_de_notificaci_n VARCHAR(200),
	c_digo_divipola VARCHAR(200),
	ciudad_de_ubicaci_n VARCHAR(200),
	departamento VARCHAR(200),
	atenci_n VARCHAR(200),
	edad VARCHAR(200),
	sexo VARCHAR(200),
	tipo VARCHAR(200),
	estado VARCHAR(200),
	pa_s_de_procedencia VARCHAR(200),
	fis VARCHAR(200),
	fecha_diagnostico VARCHAR(200),
	fecha_recuperado VARCHAR(200),
	fecha_reporte_web VARCHAR(200),
	tipo_recuperaci_n VARCHAR(200),
	codigo_departamento VARCHAR(200),
	codigo_pais VARCHAR(200),
	pertenencia_etnica VARCHAR(200),
	createdAt DATE,
	updatedAt DATE
);
```

After the tabe was created I save my first data successfylly with Sequelize:

```console
Executing (default): INSERT INTO `covid_cases` (`id`,`id_de_caso`,`fecha_de_notificaci_n`,`c_digo_divipola`,`ciudad_de_ubicaci_n`,`departamento`,`atenci_n`,`edad`,`sexo`,`tipo`,`estado`,`pa_s_de_procedencia`,`fis`,`fecha_diagnostico`,`fecha_recuperado`,`fecha_reporte_web`,`tipo_recuperaci_n`,`codigo_departamento`,`codigo_pais`,`pertenencia_etnica`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);
covid_cases {
  dataValues: {
    id: 1,
    id_de_caso: '1',
    fecha_de_notificaci_n: '2020-03-02T00:00:00.000',
    c_digo_divipola: '11001',
    ciudad_de_ubicaci_n: 'Bogotá D.C.',
    departamento: 'Bogotá D.C.',
    atenci_n: 'Recuperado',
    edad: '19',
    sexo: 'F',
    tipo: 'Importado',
    estado: 'Leve',
    pa_s_de_procedencia: 'ITALIA',
    fis: '2020-02-27T00:00:00.000',
    fecha_diagnostico: '2020-03-06T00:00:00.000',
    fecha_recuperado: '2020-03-13T00:00:00.000',
    fecha_reporte_web: '2020-03-06T00:00:00.000',
    tipo_recuperaci_n: 'PCR',
    codigo_departamento: '11',
    codigo_pais: '380',
    pertenencia_etnica: 'Otro',
    updatedAt: 2020-10-04T22:09:43.171Z,
    createdAt: 2020-10-04T22:09:43.171Z
  },
  _previousDataValues: {
    id_de_caso: '1',
    fecha_de_notificaci_n: '2020-03-02T00:00:00.000',
    c_digo_divipola: '11001',
    ciudad_de_ubicaci_n: 'Bogotá D.C.',
    departamento: 'Bogotá D.C.',
    atenci_n: 'Recuperado',
    edad: '19',
    sexo: 'F',
    tipo: 'Importado',
    estado: 'Leve',
    pa_s_de_procedencia: 'ITALIA',
    fis: '2020-02-27T00:00:00.000',
    fecha_diagnostico: '2020-03-06T00:00:00.000',
    fecha_recuperado: '2020-03-13T00:00:00.000',
    fecha_reporte_web: '2020-03-06T00:00:00.000',
    tipo_recuperaci_n: 'PCR',
    codigo_departamento: '11',
    codigo_pais: '380',
    pertenencia_etnica: 'Otro',
    id: 1,
    createdAt: 2020-10-04T22:09:43.171Z,
    updatedAt: 2020-10-04T22:09:43.171Z
  },
  _changed: Set {},
  _options: {
    isNewRecord: true,
    _schema: null,
    _schemaDelimiter: '',
    attributes: undefined,
    include: undefined,
    raw: undefined,
    silent: undefined
  },
  isNewRecord: false
}
```

I added some code to check the last value that was added. mi idea is to filter the data from the Json api looking for the entries which id are grater than the last id that I have in my database:

```jsavascript
const temp = await CovidCase.findAll({
  limit: 1,
  order: [ [ 'id', 'DESC' ]]
  });
console.log(temp);

```