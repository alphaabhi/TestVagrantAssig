//Reading data from file system
const fs = require('fs');
const assert = require('assert');
const jsonData = fs.readFileSync('TeamRcb.json');

// Loading the JSON data into a variable
const data = JSON.parse(jsonData);

// Initializing a flag to check if a wicket keeper is present
let wicket_keeper_present = false;

// Iterating through the player list
data.player.forEach(player => {
    if (player.role === "Wicket-keeper") {
        wicket_keeper_present = true;
    }
});

// Asserting that a wicket keeper is present
assert.strictEqual(wicket_keeper_present, true);
