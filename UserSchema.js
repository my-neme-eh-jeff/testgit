import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    phonenumber:{
        type:Number
    }
})

const User = mongoose.model('users',userSchema)

module.exports = User