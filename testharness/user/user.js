var express = require('express');
var app = express();
const http = require('http');

const PORT = 8082;
//const HOST = "127.0.0.1";
//const HOST = "0.0.0.0";
const HOST = "user";

app.get('/', function(req,res){
    res.send(200);
});

app.get('/user/:item/:quantity', function(request, response){
    var tries = 0;
    var item = request.params.item;
    var quantity = request.params.quantity;

    var options = {
        hostname:"http://api",
        //hostname:"127.0.0.1",
        port:8080,
        path:"/purchase/" + item + "/" + quantity,
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
        console.log(e.message);
        response.send(500);
    });
    req.end();
});

console.log("user-service running... on port " + PORT);
app.listen(PORT, HOST);
