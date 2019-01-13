/* eslint-disable global-require, import/no-extraneous-dependencies */
/* global process */
/* eslint no-console: "off" */

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();


console.log(`Serving ${__filename} from ${__dirname}`);
console.log('Built for event: dev');

// Enable CORS
// Used for the mock API below
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

// Routes for front-end
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
