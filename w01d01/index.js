//This app will be used for adding and deleting items from a list

const 
    express = require('express')
    app = express()
    PORT = 3000
    mongoose = require('mongoose')
    MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/base`
    listItemRoutes = require('./Routes/listItemRoutes.js')

mongoose.connect(MONGODB_URI, (err)=>{
    console.log(err|| `Connected to MongoDB`)
})

app.use('/', listItemRoutes)

app.listen(PORT, (err)=>{
    console.log(err|| `Server running on PORT ${PORT}`)
})