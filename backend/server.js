import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import path from 'path'
import messageRoutes from './routes/message.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import {app,server} from './socket/socket.js'
import userRoutes from './routes/user.routes.js'
// const app = express();


dotenv.config();

app.use(express.json())
app.use(cookieParser())

const __dirname = path.resolve();

const PORT = process.env.PORT;



app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
app.use(express.static(path.join(__dirname,'/frontend/dist')))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`listening on port ${PORT}`);
})