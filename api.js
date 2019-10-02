var express = require('express')
var app = express()


app.get('/', function (req, res) {
  res.send('/ route')
})

app.listen(8080);
