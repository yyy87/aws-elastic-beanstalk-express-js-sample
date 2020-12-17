const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!_updated on 17/12/2020'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
