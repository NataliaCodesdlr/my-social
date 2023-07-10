import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();
dotenv.config();


// Connecting to MongoDB server - calling Mongoose connecting  the initialization of the Data (Username && Password) && handling whatever promises goes through && catching error
const connect = () => {
    mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("connect to mongodb database");
    })
    .catch((err) => {
        throw err
    });
} 

/* Test Listening to port - send String 'Hello World' -- DELETE after testing
app.get("/", (req, res) => {
    res.send("Hello, world!");
})
*/

app.listen(8000, () => {
    connect();
    console.log('Listening to port 8000');
});