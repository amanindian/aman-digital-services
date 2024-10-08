import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  try {
    const conn = await  mongoose.connect(process.env.MONGO_URL);
    console.log(process.env.MONGO_URL)
    console.log(`Connected to mongoDB ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};

export default connectDB;