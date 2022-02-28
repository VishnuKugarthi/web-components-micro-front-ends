// this line allows us to use the expressjs module
var express = require('express');
// Add this line so we can serve files from our local
// directory
var path = require('path');
var app = express();
// Add the abillity to serve our static files from the public directory
app.use(express.static('build'));
// Here we serve up our index page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});
var server = app.listen(3009, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Icfs Ui shell web component http://%s:%s', host, port);
});
