'use strict';

if (process.env.NEW_RELIC_KEY) require('newrelic');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const indexHtml = require('./index.html');

// Load local settings when available
if (fs.existsSync('.env')) require('dotenv').config();

const port = process.env.PORT || 8080;

// Ensure that the JSON objects received from the client get parsed correctly.
app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/assets'))

// Normal serve build folder
app.get('*', (req, res) => {
  res.send(indexHtml);
});

app.listen(port, '0.0.0.0', err => {
  if (err) console.error(err);
  console.info('Open http://0.0.0.0:%s/', port);
});
