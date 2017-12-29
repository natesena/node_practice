const 
    mongoose = require('mongoose')


listItemSchema = new mongoose.Schema({
    item:{type: String}
})

var listItem = mongoose.model('listItem', listItemSchema)
module.exports = listItem