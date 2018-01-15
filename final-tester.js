try {
    let inventory = require(`./inventory.js`);

    (function () {
        // Generate items
        let names = ["brakes", "tires", "mufflers", "oil", "wiper blades"];

        names.forEach(function (item, index) {
            inventory.addItem(item, index + item.length * 3);
        });
    })();

    console.log(inventory.items());
    let most = inventory.getMostExpensive();
    let passes = most.name == "wiper blades" && most.price == 40;
    let least = inventory.getLeastExpensive();
    passes = passes && least.name == "oil" && least.price == 12;
    inventory.removeItem(most.name);
    most = inventory.getMostExpensive();
    passes = passes && most.name == 'mufflers' && most.price == 26;
    let all = inventory.items();
    passes = passes && all[0].name == least.name && all[all.length - 1].name == most.name;
    passes = passes && inventory.getItemByName('oil').price == 12;
    passes = passes && inventory.getItemByPrice(26).name == 'mufflers';
    let passFailString = passes ? "Passed" : "Failed";
    console.log(`${dirName} ${passFailString}`);

} catch (e) {
    console.log(`failed due to an error:`);
    console.log(e);
}
