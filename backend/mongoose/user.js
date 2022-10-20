import { Schema } from 'mongoose'
const mongoose =require('mongoose')
const userschema =new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    confirmpassword:{
        type: String,
        required: true
    }
})
module.exports= mongoose.model('user',userschema)