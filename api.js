var express = require('express');
var app = express();
var fs = require('fs');

const PORT = 8080;
const HOST = "0.0.0.0";

//NOTE : logger for telemetry
app.use('/', function (req, res, next){
    var log = req.method + "," + req.originalUrl + "," + Date.now() + "\n"
    fs.appendFile('logger.txt', log, (err) => {
        if(err) throw err
        console.log("log saved");
    });
    next();
});

app.get('/', function (req, res) {
    res.send('default home route' )
})

app.get('/version', function (req, res) {
    res.send('this is verison 0 of the hotBurger service' )
})

app.get('/logs', function (req, res) {
    var log = {

    };

    res.send(log);
})

app.listen(PORT, HOST);
