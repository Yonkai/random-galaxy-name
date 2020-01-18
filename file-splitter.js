var fs = require('fs');
fs.readFile('galaxy-names-raw.txt', function(err, data) {
    if(err) throw err;
    var data = data;
    console.log(data)
});