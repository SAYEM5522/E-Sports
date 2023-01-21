import { About } from "../Database/Info/Info.js"

const AboutRute=async(req,res)=>{
  const data={
    caption:req.body.caption,
    details:req.body.details
  }
  try {
   await new About(data).save()
  } catch (error) {
    console.log(error)
  }
  return res.status(201).send("Added Successfully")
}

const getAbout=async(req,res)=>{
  let about
  try {
    about=await About.find()
  } catch (error) {
    res.status(500).send({message:"Internal Server error"})
  }
  
 return res.status(200).send(about)
}
export {getAbout,AboutRute}