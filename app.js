var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/home', function (req, res) {
  res.send('Hello World!');
});

app.get('/example', function (req, res) {
  res.json({items:[1,2,34,5]});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
