var express = require('express');
var proxy = require('express-http-proxy');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var config = require('./webpack.config');
var path = require('path');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('/api', proxy('http://localhost:4000'));

app.get('/ping', function (req, res) {
  res.send('pong')
})

app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/css/bootstrap.min.css'));
});

app.get('/css/app.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/css/app.css'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, 'localhost', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000');
});
