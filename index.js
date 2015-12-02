var express = require('express')
    , http = require('http')
    , config = require('./configuration');


var app = express();
var server = app.listen(config.port);
console.log('Express server listening on config port:', config.port)

app.get('/', index);


function index(req, res) {
    res.send("hello " + config.say);
}
