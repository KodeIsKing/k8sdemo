'use strict';

const express = require('express');
const request = require('request');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    request('http://localhost:8010', { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        res.setHeader('Content-Type', 'application/json');
        res.send(body);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);