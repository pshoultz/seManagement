var express = require('express')
var app = express()

const PORT = 8080;
const HOST = "0.0.0.0";


app.get('/version', function (req, res) {
    res.send('this is verison 0 of the hotBurger service' )
})

app.get('/logs', function (req, res) {
    var log = {

    };

    res.send(log);
})

app.listen(PORT, HOST);
