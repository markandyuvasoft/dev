import mongoose from "mongoose";

// author schema

const authorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:40
    },
    age:{
        
        type:Number,
        minlength:10,
        maxlength:100
    }

})

const Author=mongoose.model('Author',authorSchema)
export default Author