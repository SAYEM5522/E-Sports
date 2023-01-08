import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
const PORT=process.env.PORT||8081
const app=express()
app.get("/",(req,res)=>{
  res.send("hello")

})
app.listen(PORT,()=>{
  console.log(`Server Started At PORT ${PORT}`)
})
