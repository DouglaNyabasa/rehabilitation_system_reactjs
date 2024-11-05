import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import auth from './routes/auth.js'



dotenv.config();

const app = express();
const port = process.env.PORT || 8000

const corsOptions ={
    origin:true,
};

app.get('/',(req,res)=>{
    res.send('Api not working')
})

mongoose.set('strictQuery', false)
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifieldTopology: true
        })
        console.log('Mongo is connected');
        
    }catch(err){
        console.log('Mongo database connection failed');
        
    }
}


app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth',auth)

app.listen(port,()=>{
    connectDB();
    console.log("server is running on port"+ port);
    
})