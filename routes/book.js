import  express  from "express";
import Book from "../models/book.js";
const router=express.Router()


// POST: to create the book
// router.post('/book',(req,res)=>{
    
//     const book=new Book({
//         name:req.body.bookname,
//         author:{
//             name:req.body.bookname,
//             age:req.body.authorage
//         },
//         genre:req.body.genre

//     });
//     book.save().then(book=>{
//         res.send(book);
//     }).catch(error=>{
//         res.status(500).send("book was not stored in db");
//     })
// })


router.get("/get",(req,res)=.{
    res.send("home")
})


router.post('/post', async (req, res) => {
    const data = new Book({
        name:req.body.bookname,
        author:{
            name:req.body.authorname,
            age:req.body.authorage
        },
        genre:req.body.genre
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

export default router

