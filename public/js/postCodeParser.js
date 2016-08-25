
var query = [];
var url = 'https://api.postcodes.io/postcodes';


/**
	Creates a table on the webpage with the given parameter array settings
	@param settings is a collection of data display options
*/
function writeToTable(constituency){
	var postCodeTable = angular.module('post-code-table', []);
	postCodeTable.controller('PhoneListCtrl', function ($scope, $http) {
		$http.get(''+constituency).success(function(data) {
			$scope.codes = data;
		});
		$scope.orderProp = 'postcode_1';
	});
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
