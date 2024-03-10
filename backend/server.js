import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
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
app.get("/",(req,res)=>{
    res.send("Hello world")
})


app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`listening on port ${PORT}`);
})