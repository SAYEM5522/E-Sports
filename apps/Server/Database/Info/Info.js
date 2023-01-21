import mongoose from "mongoose"
const AboutSchema=new mongoose.Schema({
  caption:{type:String},
  details:{type:String}
})

const About=mongoose.model("AboutSchema",AboutSchema)
export {About}


