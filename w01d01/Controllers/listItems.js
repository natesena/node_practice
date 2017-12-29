const
    listItem = require('../Models/listItem.js')

module.exports = {
    index: (req,res)=>{
        listItem.find({}, (err, listItems)=>{
            if(err){
                console.log('err finding listItems in Index Route', err)
            }
            res.json(listItems)
        })
    },
    create: (req, res)=>{
        listItem.create(req.body, (err,listItem)=>{
            if(err){
                return res.json({success:false, code: err.code})
            }
            res.json({success: true, message: 'new listItem created', listItem})
        })
    }
}