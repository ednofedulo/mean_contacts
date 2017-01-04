var express = require("express");
var app = express();
var mongoose = require("mongoose");
var port = process.env.PORT || 8080;
var database = require('./config/database');
var path = require("path");
var bodyParser = require("body-parser");
//var mongodb = require("mongodb");

mongoose.connect(database.url);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

require('./app/routes')(app);

app.listen(port);
console.log("App listening on port " + port);

