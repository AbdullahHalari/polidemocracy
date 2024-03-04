const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const DB = process.env.MONGO_URL;

const connectDb = async ()=>{
    try {
        const connection = await mongoose.connect(DB)
        console.log(`connection successful ${connection.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;


