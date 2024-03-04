const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./mongodb")
dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.json());


const  PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("server is running")
})
connectDB();