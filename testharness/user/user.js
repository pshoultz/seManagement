var express = require('express');
var app = express();
const http = require('http');

const PORT = 8082;
const HOST = "0.0.0.0";

app.get('/user/:item/:quantity', function(req, res){
    var tries = 0;
    var item = req.params.item;
    var quantity = req.params.quantity;
    //var attempts = parseInt(req.params.attempts);

    var options = {
        hostname:"127.0.0.1",
        //hostname:"http://api",
        port:8080,
        path:"/purchase/" + item + "/" + quantity,
        method:'POST',
    };

    http.request(options, function(res){
        console.log("making http request...");
        res.send(200);
    });
});

console.log("user-service running... on port " + PORT);
app.listen(PORT, HOST);
