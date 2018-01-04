var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();

app.get('/ping', function (req, res) {
  res.send('pong')
})
 
app.listen(3000, 'localhost', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000');
});
