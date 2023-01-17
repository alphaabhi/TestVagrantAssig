//Reading data from file system
const fs = require('fs');
const assert = require('assert');
const jsonData = fs.readFileSync('TeamRcb.json');

// Loading the JSON data into a variable
const data = JSON.parse(jsonData);

// Initializing a counter for foreign players
let foreign_players = 0;

// Iterating through the player list
data.player.forEach(player => {
    if (player.country !== "India") {
        foreign_players++;
    }
});

// Asserting that the number of foreign players is 4
assert.strictEqual(foreign_players, 4);
console.log(`Expected foreign players:4,Actual foreign players:${foreign_players}`);
