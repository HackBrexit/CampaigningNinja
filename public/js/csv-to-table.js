$(document).ready(function(){
	/*
	$.get('london_postcodes.csv',function(data){
		
		var codes = $.csv.toArrays(data);

		html = "<thead>";
		var headers = codes[0];
		for(var i = 0; i<headers.length;i++){
			html += "<th>"+headers[i]+"</th>";
		}
		html += "</thead><tbody>";
		
		for(var i = 1 ; i < codes.length; i++){
			html += "<tr>";
			var row = codes[i];
			for(var j = 0; j < row.length; j++){
				html += "<td>"+ row[j] + "</td>";
			}
			html+="</tr>";
		}
		html += "</tbody>";
		$("#table-data").append(html);

	});*/
	
});

function readTextFile(file)
{
    
}

document.getElementById('file').onchange = function(){
		var file = this.files[0];
		readTextFile(file);
		console.log("Start");
		var reader = new FileReader();
		reader.onload = function(progressEvent){

			var lines = this.result.split('\n');
		
			html = "<thead>";
			var headers = lines[0];
			for(var i = 0; i<headers.length;i++){
				html += "<th>"+headers[i]+"</th>";
			}
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
    	
			reader.readAsText(file);
			console.log("fininsh");
		};
	};

 
