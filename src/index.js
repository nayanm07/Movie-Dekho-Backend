//equire('dotenv').config(path: './env')
import dotenv from "dotenv"

import { app } from "./app.js";


import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})




connectDB()
.then(() => {

    app.on("errror" , (error) => {
        console.log("ERR", error);
        throw error
    })
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is Running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
        console.log("Mongo DB connnection failed !!! ", err );
})





















/*import express from "express"
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror" , (error) => {
            console.log("ERR", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port $(process.env.PORT)`);
        })
    } catch (error) {
        console.log("Error : ",error);
    }
})()
*/