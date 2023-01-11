import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { router } from "./Route/auth.js"
import mongoose from "mongoose"
import cookieParser from "cookie-parser";

const PORT=process.env.PORT||8081

const app=express()
app.use(cors())

app.use(bodyParser.json())
app.use("/",router)
// app.use(cookieParser())
const Connection_Url="mongodb+srv://e-sports:zzgWyKRSASNQOkzY@cluster0.sxukpxt.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(Connection_Url,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once('open',()=>{
  console.log("Connected Successfully")
})


app.listen(PORT,()=>{
  console.log(`Server Started At PORT ${PORT}`)
})
