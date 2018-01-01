const   
    express = require('express')
    app = express()
    PORT = 3000
    mongoose = require('mongoose')
    MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/base`

mongoose.connect(MONGODB_URI, (err)=>{
   console.log(err|| "Connected to MongoDB")
})


app.listen(PORT, (err)=>{
    console.log(err||`connected on port ${PORT}`)
})

