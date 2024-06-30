// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({
    path: './.env'
})

connectDB()        // as we have used async await in DB connection  whenever async method is completed it will return promise also  
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is running  at Port: ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Mono DB connection failed!!!", error);
})


// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express()
// (async () => {
//     try{
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//      app.on("error", (error) => {
//         console.log("ERROR:",error);
//         throw error
//      })

//      app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on Port ${process.env.PORT}`); 
//      })                        // always use Callback function whenever app. is use
//     }catch(error){
//         console.error("ERROR:", error)
//         throw error

//     }
// })()



