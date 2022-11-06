const mongoose = require('mongoose')
require('dotenv').config({path:'./config.env'})

const db = process.env.databse

mongoose.connect(db,   {
    useNewUrlParser:true,
    //useCreateIndex:true,
    useUnifiedTopology:true,
    //useFindAndModify:false
}).then(()=>{
    console.log("connection successful")
}).catch((err)=> console.log(`NO CONNECTION ${err}`))