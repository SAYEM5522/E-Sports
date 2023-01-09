import { User } from "../Database/User/User.js";
import { router } from "../Route/auth.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
const secreat_key="552255225522"
const signup=async(req,res,next)=>{
  let existingUser
  const salt = await bcrypt.genSalt(10);
  const hashPassward=await bcrypt.hash(req.body.Passward, salt);
  try{
    existingUser=await User.findOne({Email:req.body.Email})
   }catch(err){
     console.log(err)
   }
   if(existingUser){
     return res.status(401).send({message:"User with the given email already exist."})
   }
   const user=new User({
    Username:req.body.Username,
    Email:req.body.Email,
    Passward:hashPassward,
    ConfirmPassward:hashPassward,
    Country:req.body.Country

   });
   try {
    await user.save()
   } catch (err) {
     console.log(err)
   }
   res.status(201).send(user)
}
const login=async(req,res,next)=>{
  const  {Email,Passward}=req.body
  let existingUser
  try{
    existingUser=await User.findOne({Email:Email})
   }catch(err){
     return new Error(err)
   }
   if(!existingUser){
     return res.status(401).send({message:"User not found please signup"})
   }
   const isCorrectPassward=bcrypt.compareSync(Passward,existingUser.Passward)
   if(!isCorrectPassward){
     return res.status(401).send({message:"Passward not correct "})
   }
  //  1296000000
  const token=jwt.sign({Email:existingUser.Email},secreat_key,{
    expiresIn:"30s"
   })
   res.cookie(existingUser.Email,token,{
    expires:new Date(Date.now()+1000*30),
    httpOnly:true,
    sameSite:'lax'
   })
  
   res.status(200).send({message:"Successfully Loged In",user:existingUser.Email,token})
}
export {signup,login}