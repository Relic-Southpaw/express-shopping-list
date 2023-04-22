const items = require('./fakeDB')

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        items.push(this);
    }

}

module.exports = Item;