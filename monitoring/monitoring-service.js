var express = require('express');
var app = express();
var fs = require('fs');

const PORT = 8081;
const HOST = "0.0.0.0";

app.get('/gettotal',function(req,res){
    res.send(200,"hello");
});

app.get('/gettopseller',function(req,res){
});

app.get('/getrequestcount',function(req,res){
});

app.get('/getlastrequeststatus',function(req,res){
});

app.get('/getlastrequesttime',function(req,res){
});

app.listen(PORT, HOST);
