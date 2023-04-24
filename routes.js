const express = require("express");
const router = new express.Router();
const Item = require('./items');
const { nextTick } = require("process");
const items = require('./fakeDB')
//this will be all the routes

router.get('/', (req, res, next) => {
    //"get list of items"
    try {
        return res.json({ items: Item.allItems() });
    } catch (err) {
        return next(err)
    }
});
router.post('/', (req, res, next) => {
    //'post a new item'
    try {
        let newThing = new Item(req.body.name, req.body.price)
        return res.json({ item: newThing })
    } catch (err) {
        return next(err)
    }
});
router.get('/:name', (req, res, next) => {
    //'get specific item by name'
    try {
        let itemRes = Item.find(req.params.name)
        return res.json({ item: itemRes })
    } catch (err) {
        return next(err)
    }
});
router.patch('/:name', (req, res, next) => {
    //'update specific item by name'
    try {
        let itemRes = Item.update(req.params.name, req.body)
        return res.json({ item: itemRes })
    } catch (err) {
        return next(err)
    }
});
router.delete('/:name', (req, res, next) => {
    //'delete specific item by name'
    try {
        Item.remove(req.params.name)
        return res.json({ message: 'The item has been removed from the Database' })
    } catch (err) {
        return next(err)
    }
});


module.exports = router