import mongoose from "mongoose";
import Author from "../models/author.js";

// book schema

const bookSchema=new mongoose.Schema({
    name:{
        type:String,
    },
      author:Author.schema,
    genre:{
        
        type:String,
    }

})

const Book=mongoose.model('node',bookSchema)
export default Book