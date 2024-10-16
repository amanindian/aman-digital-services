import contactSchema from "../models/contactModel.js";


export const contactController = async (req, res) => {
    try {
        const { name, email, phone, service, subject, contactMethod, message } = req.body;

        if (!name || !email || !phone) {
            res.status(404).send("Name Email and Phone Require")
            console.log("Name Email and Phone Require")
            return;
        }


        const contactInfo = await new contactSchema({
            name,
            email,
            phone,
            service,
            subject: subject || undefined,
            contactMethod: contactMethod || undefined,
            message: message || undefined
        }).save()

        res.send({
            success: true,
            message: "Contact Form Submitted Successfully",
            contactInfo
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Soothing Went Wrong in Contact Us"
        })
        console.error(error)
    }
} 