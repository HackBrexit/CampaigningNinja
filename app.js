var express = require('express');
var app = express();
var path = require('path');
var request = require("request");
var sqlite = require('sqlite3').verbose();

request("http://opendata.camden.gov.uk/resource/ry6e-hbqy.json?parliamentary_constituency_name=Wealden",function(err,res,info){
	if(!err&&res.statusCode==200){
		console.log(info);
	}
});

app.use(express.static('public'));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8080);
