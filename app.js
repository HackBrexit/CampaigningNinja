var express = require('express');
var app = express();
var path = require('path');
var request = require("request");
var MongoClient = require('mongodb').MongoClient;


var url = 'mongodb://localhost:27017/campaigning-ninja';
MongoClient.connect(url,function(err,db){
	if(!err){
		console.log("Connected to db server");
		insertDoc(db,function(){
			db.close();
		});
	} else {
		console.log("failed to connect to server");
	}
});

var insertDoc = function(db,callback){
	var collection = db.collection('documents');
	collection.insert({post_code :"BR10 2JQ",constituancy :"Bromley"},function(err,result){
		console.log("Insert successfull");
		callback(result);
	});

}

var updateDoc = function(db,callback){
	var collection = db.collection('documents');
	collection.updateOne({})
}

app.use(express.static('public'));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8080);
