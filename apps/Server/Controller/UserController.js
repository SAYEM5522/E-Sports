import { User } from "../Database/User/User.js";
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
     return res.status(401).send("User with the given email already exist.")
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
     return res.status(401).send("User not found please signup")
   }
   const isCorrectPassward=bcrypt.compareSync(Passward,existingUser.Passward)
   if(!isCorrectPassward){
     return res.status(401).send("Passward not correct ")
   }
  //  1296000000
  const token=jwt.sign({id:existingUser._id},secreat_key,{
    expiresIn:"15d"
   })
  //  res.cookie(existingUser.Email,token,{
  //   expires:new Date(Date.now()+1296000000),
  //   httpOnly:true,
  //   sameSite:'lax'
  //  })
  
   res.status(200).send({message:"Successfully Loged In",user:existingUser.Email,token})
}
const verifyToken=async(req,res,next)=>{
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]
      // Verify token
      const decoded = jwt.verify(token, secreat_key)
      // Get user from the token
      req.user = await User.findById(decoded.id).select('-Passward -ConfirmPassward:')
      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }

}

const updateProfile=async(req,res)=>{
  const { city, phone, dob, zipcode } = req.body;
  const email=req.params.email
  let existingUser
  // try{
  //   existingUser=await User.findOne({Email:email})
  //  }catch(err){
  //    console.log(err)
  //  }
  //  if(!existingUser){
  //    return res.status(401).send("User Dosen't Exist")
  //  }
   try {
    existingUser= await User.findOneAndUpdate({Email:email},{$set: {city,zipcode, phone, dob: { year:dob.year, month:dob.month,day:dob.day}}}, {new: true})
   } catch (error) {
    console.log(error)
   }
    if(!existingUser){
     return res.status(401).send("User Dosen't Exist")
   }
   return res.status(201).send(existingUser)



}
const getUser=async(req,res,next)=>{
    //  const Userid=req.id
    const id=req.user._id
     let user;
     try {
      user= await User.findById(id,"-Passward -ConfirmPassward")
     } catch (error) {
      return new Error(error)
     }
     if(!user){
      return res.status(404).json({message:"User not found"})
     }
     return res.status(200).json({user})
}

export {signup,login,verifyToken,getUser,updateProfile}