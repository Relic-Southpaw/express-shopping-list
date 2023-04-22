const express = require("express");
const router = new express.Router();
const Item = require('./items')
const items = requre('./fakeDB')
//this will be all the routes
router.get('/', (req, res) => {
    try {
        return res.json(items)
    }
})

module.exports = router