const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./mongodb")
dotenv.config({ path: "./config.env" });
const convert = require("xml-js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { DOMParser } = require("xmldom");

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your client's URL
    credentials: true, // Enable credentials (cookies)
  })
);
app.use(express.json());
app.use(cookieParser());


const  PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("server is running")
})
connectDB();
const User = require("./schema/userSchema");

// SignUp
app.post("/api/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(req.body, hashedPassword);
    const user = new User({ email, username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "Signup success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Signup  unsuccess" });
  }
});
//login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    } else {
      const passwordValidate = await bcrypt.compare(password, user.password);
      console.log(passwordValidate);
      if (!passwordValidate) {
        return res.status(401).json({ error: "Invalid password" });
      }
      const token = jwt.sign({ userId: user._id }, process.env.SECRETKEY, {
        expiresIn: "1h",
      });

      res.cookie("token", token, { httpOnly: true });
      res.json({ token });
    }
  } catch (error) {
    console.log(error);
  }
});

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "unauth: No token exist" });
  }
  try {
    const decode = jwt.verify(token, process.env.SECRETKEY);
    req.userId = decode.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "unauth: Invalid token" });
  }
};
//checking token in cookie
app.get("/api/checkToken", (req, res) => {
  // If token is valid, return success message
  const token = req.cookies.token;
  if (token) {
    // If token exists, return success message
    res.status(200).json({ token, message: "Token is valid" });
  } else {
    // If token doesn't exist, return an error message
    res.status(401).json({ message: "Token not found" });
  }
  //   res.status(200).json({token, message: "Token is valid" });
});
//logout
app.post("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "logout successfully" });
});

app.get("/api/newsData",async(req,res) =>{
  try {
       const response = await fetch(process.env.newsUrl);
       if (!response.ok) {
         throw new Error("Network response was not ok");
       }
       const data = await response.json();
       res.json(data)
       console.log(data);
     } catch (error) {
       console.error("Error fetching data:", error);
     }

})

app.get("/api/blogsData", async (req, res) => {
    try {
      const response = await fetch(process.env.blogUrl);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const xmlData = await response.text();
      res.set("Content-Type", "text/xml");
      res.send(xmlData);
      // console.log(xmlData)
    } catch (error) {
      console.error("Error fetching Twingly data:", error);
      res.status(500).json({ error: "Failed to fetch Twingly data." });
    }
});
