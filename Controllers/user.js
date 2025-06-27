import bcrypt from "bcryptjs";
import { User } from '../Models/User.js'

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    // console.log(10);
    // console.log("name == ",req.body.name);

    if (name == "" || email == "" || password == 0) {
        return res.json({ message: "All details required" });
    }
    let userCheck = await User.findOne({ email });
    if (userCheck) {
        return res.json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    let user = await User.create({ name, email, password: hashPassword });
    res.json({
        message: "User created successfully",
        createdAt: new Date().toLocaleString(),
        user
    });
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (email == "" || password == 0) {
        return res.json({ message: "All details required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ message: "User does not exist" });
    }
    let passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
        return res.json({ message: "Invalid Password. Try again" });
    }
    return res.json({
        message: `Hello, ${user.name} `,
        loggedInAt: new Date().toLocaleString(),
        success: true
    })
}