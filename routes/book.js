import  express  from "express";
import Book from "../models/book.js";
const router=express.Router()


// POST: to create the book
router.post('/book',(req,res)=>{
    
    const book=new Book({
        name:req.body.bookname,
        author:{
            name:req.body.bookname,
            age:req.body.authorage
        },
        genre:req.body.genre

    });
    book.save().then(book=>{
        res.send(book);
    }).catch(error=>{
        res.status(500).send("book was not stored in db");
    })
})


export default router

