import express from "express"
import { signup,login,verifyToken,getUser, updateProfile, getSearchresult, changePassword, getSpecificUser } from "../Controller/UserController.js"
const router=express.Router()
router.get("/",(req,res,next)=>{
  res.send("hello")
})
router.post("/signup",signup)
router.post("/login",login)
router.get("/user",verifyToken,getUser)
router.get("/getSpecificUser/:email",getSpecificUser)

router.put("/updateProfile/:email",updateProfile)
router.get("/getSearchresult/",getSearchresult)
router.patch("/changePassword/:email",changePassword)



export {router}
