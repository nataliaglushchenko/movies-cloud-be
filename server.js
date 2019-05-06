const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var cors = require('cors');

const rules = require('./data/rules').rules;
const movies = require('./data/movies').movies;

const app = express();
const port = 4500;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/movies', (req, res) => {
    res.json(movies);
});

app.get('/rules', (req, res) => {
    res.json(rules);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));