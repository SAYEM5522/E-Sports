import mongoose from "mongoose"
const AboutSchema=new mongoose.Schema({
  caption:{type:String},
  details:{type:String}
})
const TermsSchema=new mongoose.Schema({
  caption:{type:String},
  details:{type:String}
})

const About=mongoose.model("AboutSchema",AboutSchema)
const Terms=mongoose.model("TermsSchema",TermsSchema)

export {About,Terms}


