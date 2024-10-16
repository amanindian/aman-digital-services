import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    service: {
        type: String,
        default: "No Specifics Services"
    },
    subject: {
        type: String,
        default: "No Specifics Subject"
    },
    contactMethod: {
        type: String,
        require: true,
        default: "Email"
    },
    message: {
        type: String,

    }
}, {
    timestamps: true
})


export default mongoose.model('contactQueries', contactSchema)