import JWT from 'jsonwebtoken'
import userModels from '../models/userModels.js';

export const requireSigning = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.error(error)
        res.send({ message: "Error in Require Signing", error })
    }
}


export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModels.findById(req.user._id)
        if (user.role !== 1) {
            res.status(404).send({
                success: false,
                message: "Unauthorize Access Not Admin"
            })
        } else {
            next()
        }
    } catch (error) {
        console.error(error)
        res.send(error)
    }
}