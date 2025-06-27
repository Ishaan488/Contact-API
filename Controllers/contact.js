import { Contact } from "../Models/Contact.js";

export const createContact = async (req, res) => {

    const { name, email, phone, type } = req.body;
    if (name == "" || email == "" || phone == "" || type=="") {
        return res.json({
            message: "All fields required"
        })
    }

    let saveContact = await Contact.create({
        name,
        email,
        phone,
        type
    })

    res.json({
        message:"Contact created successfully"
    })

}

export const getAllContacts = async (req,res)=>{

    let getContact= await Contact.find();
    if(getContact==""){
        return res.json({message:"No contact found"})
    }
    res.json({
        message:"All Contacts",
        contacts:getContact
    })

}