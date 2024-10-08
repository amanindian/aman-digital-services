import { hashPassword } from "../helpers/authHelper.js";
import userModels from "../models/userModels.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    if (!name) {
      res.send({
        error: "Name is required",
      });
    }
    if (!email) {
      res.send({
        error: "Email is required",
      });
    }
    if (!password) {
      res.send({
        error: "Password is required",
      });
    }


    //Check Existing costumer
    const existUser = await userModels.findOne({ email });
    if (existUser) {
      res.status(200).send({
        success: true,
        message: "Already register please login",
      });
    }

    //Register User
    const hashedPassword = await hashPassword(password);

    const user = await new userModels({
      name,
      email,
      phone,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
    });
  }
};