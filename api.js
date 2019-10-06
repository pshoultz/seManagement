var express = require('express');
var app = express();
var fs = require('fs');

const PORT = 8080;
const HOST = "0.0.0.0";

//NOTE : logger for telemetry
app.use(function (req, res, next){
    var log = req.method + "," + req.originalUrl + "," + res.statusCode + "\n";
    console.log(res.status);
    fs.appendFile('logger.txt', log, (err) => {
        if(err) throw err
    });
    next();
});

app.get('/version', function (req, res) {
    res.send('this is verison 0 of the hotBurger service' )
})

app.get('/logs', function (req, res) {
    var contents = fs.readFileSync("./logger.txt", 'utf8');
    console.log(contents);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(contents);
})



app.listen(PORT, HOST);
