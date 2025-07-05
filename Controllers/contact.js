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

export const getContactById= async (req,res)=>{
    let id=req.params.id;
    const contact= await Contact.findById(id);
    if(!contact){
        return res.json({message:"No contact found"});
    }
    res.json({
        message:"Contact found",
        contact,
        sucess:true
    })
}

export const updateContactById = async (req,res)=>{
    let id=req.params.id;
    const {name,email,phone,type}=req.body;
    let oldContact=await Contact.findByIdAndUpdate(id,{
        name,
        email,
        phone,
        type
    });
    if(!oldContact){
        return res.json({message:"No contact found"});
    }
    let updatedContact=await Contact.findById(id);
    res.json({message:"Contact updated", updatedContact,success:true});

}

export const deleteContactById=async (req,res)=>{
    let id =req.params.id;
    let contact=await Contact.findByIdAndDelete(id);
    if(!contact){
        return res.json({message:"No contact found"});
    }
    res.json({
        message:"Contact deleted",
        contact
    })

}