const galaxyNames = require('./galaxy-names.js');

// total number of names in array
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

// select random alphabetic name
function getRandomAlphabeticGalaxyName(){
  // regex tests if strings contain any digits
  let regex = /\d/;


  const alphabetic = galaxyNames.galaxies.filter((name)=>{
    if(!regex.test(name)){
      return name;
    }
  })

  return alphabetic[getRandomInt(alphabetic.length)];
}

// select random alphabetic name
function getRandomMostlyAlphabeticGalaxyName(){
  // regex tests if strings contain any digits but only when there is less than 4 in a row.
  let regex = /\d{4}/;


  const mostlyAlphabetic = galaxyNames.galaxies.filter((name)=>{
    if(!regex.test(name)){
      return name;
    }
  })

  return mostlyAlphabetic[getRandomInt(mostlyAlphabetic.length)];
}

exports.getRandomGalaxyName = getRandomGalaxyName;
exports.getRandomAlphabeticGalaxyName = getRandomAlphabeticGalaxyName;
exports.getRandomMostlyAlphabeticGalaxyName = getRandomMostlyAlphabeticGalaxyName;