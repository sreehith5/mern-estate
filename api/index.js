import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to db");
}).catch((error)=>{
    console.log(error);
})

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, ()=>{
    console.log('Server is listening to port 3000');
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use((error,req,res,next)=>{
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal server error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
})