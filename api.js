var express = require('express')
var app = express()

const PORT = 8080;
const HOST = "0.0.0.0";


app.get('/', function (req, res) {
  res.send('/ route')
})

app.listen(PORT, HOST);
