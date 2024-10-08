import { comparePassword } from "../helpers/authHelper.js";
import userModels from "../models/userModels.js";

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

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
        if (!existUser) {
            res.status(404).send({
                success: false,
                message: "User Not Available",

            });
        }

        const match = await comparePassword(password, existUser.password);
        if (!match) {
            res.status(200).send({
                success: false,
                message: "Invalid Password",
            });
        } else {
            res.status(200).send({
                success: true,
                message: "User Login",
                existUser,
                password
            });
        }


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
        });
    }
};