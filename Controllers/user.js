import bcrypt from "bcryptjs";
import {User} from '../Models/User.js'

export const register=async (req,res)=>{
    const {name,email,password}=req.body;
    // console.log(10);
    // console.log("name == ",req.body.name);

    if(name=="" || email=="" || password==0){
        return res.json({message: "All details required"});
    }
    let userCheck=await User.findOne({email});
    if(userCheck){
        return res.json({message:"User already exists"});
    }

    const hashPassword=await bcrypt.hash(password,10);

    let user = await User.create({name, email, password:hashPassword});
    res.json({
        message:"User created successfully",
        user
    });
}