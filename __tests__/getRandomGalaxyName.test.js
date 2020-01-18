const getRandomGalaxyName = require('../getRandomGalaxyName.js')
const assert = require('assert');

// TEST: Make sure function always returns a string.
let callCount = 0;
while(callCount < 567888){
    var galaxyName = getRandomGalaxyName.getRandomGalaxyName();
    assert
    .ok(typeof galaxyName === 'string','Wrong type returned from getRandomGalaxyName() function.');
    callCount++;
}