import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./Config/DB.js";
import authRouter from "./routes/authRoute.js";
import contactRoute from "./routes/contactRoute.js"
import cors from 'cors'

const app = express();

//This is written for Using .env file and Variable
// if .env file in another folder then use
// dotenv.config({path:"Write Our Path "});
dotenv.config(7);
const PORT = process.env.PORT || 8080;

//Connecting DataBase
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); //This is for skip Cross Origin Error means Client and Server Error Not Come 
app.use(morgan("dev")); //This is using because if we hit api then this will inform in console

//Routes
app.use("/api/v1/auth", authRouter);
app.use("/", contactRoute);

app.get("/", (req, res) => {
  res.send("I am Aman Kumar Pandey");
});

app.get("/name", (req, res) => {
  res.send("<h1>My name is Aman Kumar </h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Our Port is running on ${PORT} `);
});
