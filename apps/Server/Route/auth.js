import express from "express"
import { signup,login,verifyToken,getUser, updateProfile, getSearchresult } from "../Controller/UserController.js"
const router=express.Router()
router.get("/",(req,res,next)=>{
  res.send("hello")
})
router.post("/signup",signup)
router.post("/login",login)
router.get("/user",verifyToken,getUser)
router.put("/updateProfile/:email",updateProfile)
router.get("/getSearchresult/",getSearchresult)


export {router}
