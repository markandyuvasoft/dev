import mongoose from "mongoose";

// author schema

const authorSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        
        type:Number,
    }

})

const Author=mongoose.model('Author',authorSchema)

export default Author