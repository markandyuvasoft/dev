import mongoose from "mongoose";
import Author from "../models/author.js";

// book schema

const bookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
      author:Author.schema,
    genre:{
        
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    }

})

const Book=mongoose.model('node',bookSchema)
export default Book