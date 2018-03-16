'use strict';

if (process.env.NEW_RELIC_KEY) require('newrelic');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Load local settings when available
if (fs.existsSync('.env')) require('dotenv').config();

let indexHtml;

fs.readFile('index.html', 'utf8', function (err, data) {
  console.error(err);
  indexHtml = data;
});

const port = process.env.PORT || 8080;

// Ensure that the JSON objects received from the client get parsed correctly.
app.use(bodyParser.json());
app.use('/assets', express.static(__dirname + '/assets'))
app.use(express.static(__dirname + '/build'));

// Normal serve build folder
app.get('*', (req, res) => {
  res.send(indexHtml);
});

app.listen(port, '0.0.0.0', err => {
  if (err) console.error(err);
  console.info('Open http://0.0.0.0:%s/', port);
});
