"use strict";

let inventory = require("./inventory.js");

(function() {
    // Generate items
    let names = ["brakes", "tires", "mufflers", "oil", "wiper blades"];

    names.forEach(function(item, index) {
        inventory.addItem(item, getRandomDollar(index, (index + 1) * 10));
    });

    function getRandomDollar(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }
})();

console.log(inventory.items());
let most = inventory.getMostExpensive();
console.log("Most expensive", most);
console.log("Least expensive", inventory.getLeastExpensive());
inventory.removeItem(most.name);
console.log("Removed ", most);
most = inventory.getMostExpensive();
console.log("Most expensive", most);