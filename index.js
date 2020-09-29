const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Test'))

const PORT = 3000;

app.listen(PORT, console.log(`Server startet at port ${PORT}`));
