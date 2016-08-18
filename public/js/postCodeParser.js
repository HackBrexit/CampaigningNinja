var request = require('request');
var stream = require('stream');

var query = [];
var url = 'https://api.postcodes.io/postcodes'
;
var src = new Stream();
src.readable = true;

var dst = new Stream();
dst.writable = true;

src.pipe(dst);

function writeToTable(){

}
/**
	Retrieve information for a single post code by query
*/
function getSingleCode(postCode){
	try{
		request(url+'/'+postCode,function(err, res, info){
			if(!err && res.statusCode==200){
				console.log(info);
				query = info;

			}
		});
	} catch(err){
		console.log(err);
		console.log("String input expected. Did you input a single post code?");
	}
}
/*
	Retrieve information from many postcodes
	note: must use JSON object containing an array of postcodes
*/
function getBulkCode(postCodes){
	try{
		request(url+'?q='+postCodes),function(err,res,info){
			if(!err&&res.statusCode==200){
				console.log(info);
				query = info
			}
		}
	} catch(err){
		console.log(err);
		console.log("JSON Object expected.")
	}
}
