const express = require('express')
const port = process.env.PORT || 9000;

module.exports = {
  contentBase: 'assets',
  hot: true,
  host: '0.0.0.0',
  port, // Just a port
  stats: { chunks: false }, // Stops showing all the chunking info
  historyApiFallback: true, // This is needed for nested routes,
  setup(app) {
    app.use('/assets', express.static(__dirname + '/assets'))
  }
};
