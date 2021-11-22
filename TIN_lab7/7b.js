const fs = require('fs');
var myArgs = process.argv.slice(2);

fs.watch(myArgs[0], function (eventType, filename) {
	if (eventType === 'change'){
		if (filename) {
			console.log('filename provided: ' + filename + '\n');
			console.log('file content:\n');
			fs.readFile(myArgs[0] + filename, 'utf-8', (err, data) => {
				if(err) throw err;
				console.log(data);
			});
		} else {
			console.log('filename not provided');
		}
	}
    
});