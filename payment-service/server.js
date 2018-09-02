'use strict';

const express = require('express');

// Constants
const PORT = 8010;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "status": "success"}));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);