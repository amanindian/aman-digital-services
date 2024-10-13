import { hashPassword } from "../helpers/authHelper.js";
import userModels from "../models/userModels.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    if (!name) {
      res.send({
        error: "Name is required",
      });
      return;
    } else if (!email) {
      res.send({
        error: "Email is required",
      });
    } else if (!password) {
      res.send({
        error: "Password is required",
      });
      return;
    }


    //Check Existing costumer
    const existUser = await userModels.findOne({ email });
    if (existUser) {
      res.status(400).send({
        success: true,
        message: "User Already register please login",
      });
      return;
    }

    //Register User
    const hashedPassword = await hashPassword(password);

    const user = await new userModels({
      name,
      email,
      phone,
      role: role || 0,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });

  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error
    });
  }
};