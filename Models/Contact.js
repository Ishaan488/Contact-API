import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    phone:{type:Number,require:true},
    type:{type:String,require:true},
    createdAt:{type:Date,default:Date.now}
})

export const Contact = mongoose.model("Contact",contactSchema);