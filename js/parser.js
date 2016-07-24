
	var fs = require('fs');
	fs.readFile('data/London_postcodes.csv', function (err,logData){
		if(err) throw err;
		var text = logData.toString();
		var lines = text.split('\n');
		var header = lines[0];
		html = "<thead>";
		for(var i = 0; i<header.length;i++){
			html += "<th>"+header[i]+"</th>";
		}
	
		for(var i = 1; i < lines.length; i++){
			var parts = lines[i].split(',');
		
			html += "</thead><tbody>";
		
			for(var i = 1 ; i < lines.length; i++){
				html += "<tr>";
				var row = lines[i];
				for(var j = 0; j < row.length; j++){
					html += "<td>"+ row[j] + "</td>";
				}
				html+="</tr>";
			}
			html += "</tbody>";
			$("#table-data").append(html);
		}
		
	});

