import  express  from "express";
import Book from "../models/book.js";
const router=express.Router()


router.post("/post",(req,res,next)=>{

    const user = new Book(req.body)
  
    user.save().then(()=>{

    res.status(201).send(user)

    }).catch((err)=>{
  
    res.status(400).send(err)

    }) 
  })


  router.get("/get",async(req,res)=>{

    try{

    const get= await Book.find()

    res.status(201).send(get)
    }
    catch(err)
    {
    res.status(400).send(err)
    }
})

router.put("/update/:id", async (req,res)=>{
    try{
    
    const _id= req.params.id;
    
    const update= await Book.findByIdAndUpdate(_id, req.body)
    
    res.send(update)
    
    }catch(err){
    
    res.status(400).send(err)
    }
    })


    router.delete("/delete/:id",async(req,res)=>{

        try{
            const _id= req.params.id
    
            const del= await Book.findByIdAndDelete(_id)
    
            res.status(201).send(del)
        }
        catch(err)
        {
            res.status(500).send(err)
        }
    })
export default router

