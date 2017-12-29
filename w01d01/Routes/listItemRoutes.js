const 
    express = require('express')
    listItemRouter = new express.Router()
    listItemCTRL = require('../Controllers/listItems.js')

listItemRouter.route('/')
    .get(listItemCTRL.index)
    .post(listItemCTRL.create)

module.exports = listItemRouter