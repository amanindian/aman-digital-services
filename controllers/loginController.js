import { comparePassword } from "../helpers/authHelper.js";
import userModels from "../models/userModels.js";
import JWT from 'jsonwebtoken'

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
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
        const user = await userModels.findOne({ email });
        if (!user) {
            res.status(404).send({
                success: false,
                message: "User Not Available",
            });
            return;
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            res.status(400).send({
                success: false,
                message: "Invalid Password",
            });
        } else {
            const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
            res.status(200).send({
                success: true,
                message: "User Login Successfully",
                user: {
                    Name: user.name,
                    Email: user.email,
                    Phone: user.phone,
                    address: user.address || "Address Not Available"
                },
                ggg: process.env.JWT_SECRET,
                token
            });
        }


    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        });
    }
};




export const testController = (req, res) => {
    try {
        res.send("Protected Route")
    } catch (error) {
        console.error(error)
        res.status(400).send(error)
    }
}