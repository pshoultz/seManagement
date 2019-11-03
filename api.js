var express = require('express');
var app = express();
var fs = require('fs');

const PORT = 8080;
const HOST = "0.0.0.0";

app.get('/version', function (req, res) {
    res.send('this is verison 1 of the hotBurger service' )
})

//app.get('/logs', function (req, res) {
//    var contents = fs.readFileSync("./logger.txt", 'utf8');
//    console.log(contents);
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.write(contents);
//    //res.end();
//})

app.get('/getMenu', function(req,res){
    res.send({
        "hotdong":20,
        "hamburger":35,
        "soda":4,
        "cookie":6
    });
});

app.post('/purchase/:item/:quantity', function(req,res){
    console.log(req.params.item, req.params.quantity);
});

app.listen(PORT, HOST);
