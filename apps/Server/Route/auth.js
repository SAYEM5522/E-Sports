import express from "express"
import { signup,login } from "../Controller/UserController.js"
const router=express.Router()
router.get("/",(req,res,next)=>{
  res.send("jjj")
})
router.post("/signup",signup)
router.post("/login",login)

export {router}
