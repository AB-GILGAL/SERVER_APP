import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import ServerModel from "./serverSchema/server_Schema.js"


const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())


const port =  process.env.PORT||8000
const url=process.env.DB_URL

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log("Database connected successfully")

}).catch((error)=>{
    console.log(error)
})


app.get("/home",(req,res)=>{
    res.send("Welcome to AB's Assignment API")
})

app.get("/fetchUsers",async(req,res)=>{
    const User = await ServerModel.find({});

    if (User){

        return res.status(200).json({
             message:"Fetch all Users from database",
             data: User
         })
     }else{
        return res.status(400).json({
             message:"Failed to fetch Users from database"
         
})
     }


})

app.post("/addUser", async(req,res)=>{
    const{first_name, last_name, birth_date, school}=req.body
    const createUser = await ServerModel.create({
        first_name,
        last_name,
        birth_date,
        school
    })
    if(createUser){
        return res.status(201).json({
            message:"User added successfully",
            data: createUser
        
        })
    }else{
        return{
            message:"Failed to add a new User",
            
        }
    }

})


app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})