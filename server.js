var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
//var mongodb = require("mongodb");
var mongoose = require("mongoose")

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/dbcontacts';


MongoClient.connect(url, function (err, db) {
    
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
      process.exit(1);
    }

    db = db;
  	console.log("Database connection ready");
  	var server = app.listen(process.env.PORT || 8080, function () {
	    var port = server.address().port;
	    console.log("App now running on port", port);
	});

});

