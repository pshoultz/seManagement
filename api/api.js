var express = require('express');
var app = express();
var fs = require('fs');
const http = require('http');

const PORT = 8080;
//const HOST = "127.0.0.1";
const HOST = "0.0.0.0";

//NOTE : logger for telemetry
app.use(function (req, res, next){
    var log = req.method + "," + req.originalUrl + "," + res.statusCode + "\n";
    console.log(res.status);
    fs.appendFile('data.txt', log, (err) => {
        if(err) throw err
    });
    next();
});

app.get('/version', function (req, res) {
    res.send('this is verison 1 of the hotBurger service' )
})

app.get('/getMenu', function(req,res){
    res.send({
        "hotdog":20,
        "hamburger":35,
        "soda":4,
        "cookie":6
    });
});

app.post('/purchase/:item/:quantity', function(request,response){

    var item = request.params.item;
    var quantity = request.params.quantity;
    var options = {
        hostname:"con-sem-inventory",
        //hostname:"http://inventory",
        //hostname:"127.0.0.1",
        port:8083,
        path:"/setcount/" + item + "/" + quantity,
        method:'POST'
    };

    var req = http.request(options, function(res){
        console.log("making http request...");
        res.on('data', (d) => {
            console.log("request made...");
            response.send(200);
        });
    });

    req.on('error', function(e){
        console.log("api.js:: ", e.message);
        response.send(500);
    });
    req.end();
});

console.log("api.js running... on port " + PORT);
app.listen(PORT, HOST);
