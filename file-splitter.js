// require node file-system
var fs = require('fs');

// read file brought in via cURL command:
// curl -L https://raw.githubusercontent.com/CelestiaProject/Celestia/master/data/galaxies.dsc --output galaxy-names-raw.txt
fs.readFile('galaxy-names-raw.txt', function(err, data) {
    if(err) throw err;
    
    // convert node buffer into string and split into strings based on newline delimiter
    let array = data.toString().split("\n");

    // filter each line to see if it starts with Galaxy
    const resultsThatStartWithGalaxy = array.filter(line => line.startsWith('Galaxy'));
    
    // slice each line that begins with galaxy to only the name of the galaxy based on
    // on consistent formatting of original file
    const galaxyNames = resultsThatStartWithGalaxy.map(filteredLines => filteredLines.slice(8,-1));
   
    // convert array of galaxy names to object to be converted to JSON
    let preworkGalaxyNamesJSONObject = {
        galaxies: galaxyNames
     };

     // convert object to JSON
     let galaxyNamesJSON = JSON.stringify(preworkGalaxyNamesJSONObject);
    
     // write JSON file with nodejs core library 'file-system' function
    //  fs.writeFile('galaxy-names.json', galaxyNamesJSON, 'utf8',  (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    //   });

    // write javascript data file for require
      fs.writeFile('galaxy-names.js', 'module.exports = ' + galaxyNamesJSON, 'utf8',  (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });  
});