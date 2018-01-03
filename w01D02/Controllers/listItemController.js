//import the model
const 
    listItem = require('../Models/listItem.js')

module.exports={
    index:(req,res)=>{
        listItem.find({}, (err, listItems)=>{
            if(err){res.json({success:false, message: err.code})}
            res.json({success: true, listItems: listItems})
        })
    },
    create: (req,res)=>{
        listItem.create(req.body, (err,user)=>{
            if(err){res.json({success: false, code: err.code})}
            res.json({success:true, user})
        })
    }
}