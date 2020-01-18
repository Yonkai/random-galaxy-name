var fs = require('fs');
fs.readFile('galaxy-names-raw.txt', function(err, data) {
    if(err) throw err;
    let dataString = data.toString('utf8');
    let array = data.toString().split("\n");
    const resultsThatStartWithGalaxy = array.filter(line => line.startsWith('Galaxy'));
    // console.log(resultsThatStartWithGalaxy);
    const galaxyNames = resultsThatStartWithGalaxy.map(filteredLines => filteredLines.slice(8,-1));
    // console.log(galaxyNames)
    let preworkGalaxyNamesJSONObject = {
        galaxies: galaxyNames
     };
     let galaxyNamesJSON = JSON.stringify(preworkGalaxyNamesJSONObject);
    //  console.log(galaxyNamesJSON)
     fs.writeFile('galaxy-names.json', galaxyNamesJSON, 'utf8',  (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });  
});