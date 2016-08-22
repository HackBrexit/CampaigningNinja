
var query = [];
var url = 'https://api.postcodes.io/postcodes';


/**
	Creates a table on the webpage with the given parameter array settings
	@param settings is a collection of data display options
*/
function writeToTable(settings){
	var division = document.getElementById("post-code-table");
	var table = document.createElement("TABLE");
	var theadRow = table.createTHead().insertRow(0);
	var cellHID = theadRow.insertCell(0);
	cellHID.innerHTML = "<b>#</b>";
	var cellHPost = theadRow.insertCell(1);
	cellHPost.innerHTML = "<b>Post Code</b>";


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

/*
*/
function getOuterCodes(outerCode){
	request('api.postcodes.io/outcodes/' + outerCode),function(err,res,info){
		if(!err&&res.statusCode==200){
			console.log(info);
			query = info;
		}
	}
}
/*
*/
function getNearestCodes(outerCode){
	request('api.postcodes.io/outcodes/' + outerCode + '/nearest'),function(err,res,info){
		if(!err&&res.statusCode==200){
			console.log(info);
			query = info;
		}
	}
}
