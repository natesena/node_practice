const 
    mongoose = require('mongoose')

var listItemSchema = new mongoose.Schema({
    item: {type: String}
})

var listItem = mongoose.model('listItem', listItemSchema)
module.exports = listItem