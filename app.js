var express = require('express');
var app = express();

const path = require('path');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'static')));

// Serve index.html
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'static/html/index.html'));
});

app.listen(PORT_HERE, function () {
  console.log('App is now running');
});