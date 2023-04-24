const items = require('./fakeDB')

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        items.push(this);
    }
    static allItems() {
        return items
    }

    static find(name) {
        let idx = items.find(i => i.name === name);
        if (idx === undefined) {
            throw (err)
        }
        return idx;
    }

    static update(name, data) {
        let idx = Item.find(name);
        if (idx === undefined) {
            throw (err)
        }
        idx.name = data.name;
        idx.price = data.price;
        return idx;
    }

    static remove(name) {
        let idx = items.findIndex(i => i.name === name);
        if (idx === -1) {
            throw (e)
        }
        items.splice(idx, 1);
    }
}

module.exports = Item;