"use strict"; //gotta sort shit

let itemsarray = [];

module.exports = {

    addItem: function (name, price) {
        //itemsobject [name] = price;
        let newitem = {};
        newitem.name = name;
        newitem.price = price;
        itemsarray.push(newitem);
    },

    items: function () {
        itemsarray.sort(function(a, b) {
            return a.price - b.price; 
        });
        return itemsarray;
    },

    getMostExpensive: function () {
        let most = itemsarray[0];
        for (let i = 1; i < itemsarray.length; i++) {
            if (+itemsarray[i]["price"] > +most["price"]) {
                most = itemsarray[i];
            }
        }
        return most;
    },

    getLeastExpensive: function () {
        //let leastobj = itemsarray[0];
        let least = itemsarray[0];
        for (let i = 1; i < itemsarray.length; i++) {
            if (+itemsarray[i]["price"] < +least["price"]) {
                least = itemsarray[i];
            }
        }
        return least;
    },

    removeItem: function (name) {
        let index2remove = 0;
        for (let i = 0; i < itemsarray.length; i++) {
            if (itemsarray[i]["name"] === name)
                index2remove = itemsarray.indexOf(itemsarray[i]);
        }
        itemsarray.splice(index2remove, 1);
    },

    getItemByName: function (name) {
        for (let i = 0; i < itemsarray.length; i++) {
            if (itemsarray[i]["name"] === name)
                return itemsarray[i];
        }
    },

    getItemByPrice: function (price) {
        for (let i = 0; i < itemsarray.length; i++) {
            if (itemsarray[i]["price"] === price)
                return itemsarray[i];
        }
    },

};
