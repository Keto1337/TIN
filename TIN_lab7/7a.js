const http = require('http');
const url = require('url');
const host = '127.0.0.1';
const port = '8000';
var server = http.createServer(function(request, response) {
	var query = url.parse(request.url, true).query;
	response.writeHead(200, {"Content-Type": "text/plain"});
	
	if (query['number1'] !== undefined && query['operator'] !== undefined && query['number2'] !== undefined) {
		var statement = "";
		var num1 = query['number1'];
		var num2 = query['number2'];
		switch(query['operator']) {
			case 'add':
				var result = parseInt(num1) + parseInt(num2);
				statement = num1 + " + " + num2 + " = " + result + "\n";
				break;
			case 'sub':
				var result = parseInt(num1) - parseInt(num2);
				statement = num1 + " - " + num2 + " = " + result + "\n";
				break;
			case 'mul':
				var result = parseInt(num1) * parseInt(num2);
				statement = num1 + " * " + num2 + " = " + result + "\n";
				break;
			case 'div':
				var result = parseInt(num1) / parseInt(num2);
				statement = num1 + " / " + num2 + " = " + result + "\n";
				break;
			default:
				statement = "incorrect formatting..\n" + 
							"As operator try using (\"add\", \"sub\", \"div\", \"mul\")\n";
		}
		
		if (statement.length !== 0) response.write(statement);
	}
	
	response.end("Send your example:)\n");
});

server.listen(port, host);
console.log(`Server running at http://${host}:${port}/`);