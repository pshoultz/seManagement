var express = require('express');
var app = express();

const PORT = 8083;
const HOST = "0.0.0.0";

var hotdog = 200;
var hamburger = 250;
var soda = 40;
var cookie = 60;

app.get('/getcount/:item', function (req, res) {
    var amount = {
        hotdog:hotdog,
        hamburger:hamburger,
        soda:soda,
        cookie:cookie
    }
    res.send(200, amount);
});

app.post('/setcount/:item/:quantity', function (req, res){
    console.log("inventory.js hit");
    console.log(req.params.item);
    console.log(req.params.quantity);

    switch(req.params.item){
        case "hotdog":
            hotdog = req.params.quantity;
            break;
        case "hamburger":
            hotdog = req.params.quantity;
            break;
        case "soda":
            hotdog = req.params.quantity;
            break;
        case "cookie":
            hotdog = req.params.quantity;
            break;
    }

    res.send(200);
});

console.log("inventory-service running... on port " + PORT);
app.listen(PORT, HOST);
