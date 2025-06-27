import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config";
import userRoutes from './Routes/user.js'
import contactRoutes from './Routes/contact.js'

const app = express();

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/contact',contactRoutes);

app.get('/',(req,res)=>{
    res.json({
        message:"Hello world"
    })
})

mongoose.connect(`${process.env.connectionString}`, { dbName: "Contact_API" ,})
    .then(() => { console.log("MongoDB Connected.") })
    .catch((error) => { console.log(error) });  

const port = 3000;
app.listen(port, () => { console.log(`Server is running on port ${port}`) });