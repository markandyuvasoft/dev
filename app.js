import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import router from './routes/book.js'

dotenv.config()
const app=express();


// midleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// routes
app.use("/",router)


const PORT=process.env.PORT||3000

mongoose 
 .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
           })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));









// server port
app.listen(PORT,()=>{
    console.log("server started at port http://localhost:3000");
})