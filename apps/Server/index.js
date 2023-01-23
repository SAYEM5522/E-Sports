import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { router } from "./Route/auth.js"
import { Homerouter } from "./Route/Home.js"
import { Teamrouter } from "./Route/Team.js"
import {InfoRouter} from "./Route/Info.js"
import mongoose from "mongoose"


const PORT=process.env.PORT||8081

const app=express()
app.use(cors())

app.use(bodyParser.json())
// Route
app.use("/",router)
app.use("/",Homerouter)
app.use("/",Teamrouter)
app.use("/",InfoRouter)



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

