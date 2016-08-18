var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io');


app.use(express.static('public'));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});


var socket = io.connect('http://127.0.0.1:3000/',{query:"foo=bar"});

io.on('connection', function(){});
server.listen(3000);