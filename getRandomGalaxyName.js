const galaxyNames = require('./galaxy-names.js');

// number of names in array
const galaxyNameCount = galaxyNames.galaxies.length;

// util function
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// select random name
function getRandomGalaxyName(){
    const name = galaxyNames.galaxies[getRandomInt(galaxyNameCount)];
    return name;
}

exports.getRandomGalaxyName = getRandomGalaxyName;
module.exports = getRandomGalaxyName;