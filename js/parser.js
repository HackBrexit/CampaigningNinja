var fs = require('fs');
fs.readFile('London_postcodes.csv', function (err,logData){
	if(err) throw err;
	var text = logData.toString();
	var lines = text.split('\n');
	var header = lines[0];
	
	for(var i = 1; i < lines.length; i++){
		var parts = lines[i];

	}
		
		var parts = line.split(',');
		
});
