import mongoose from "mongoose"

const UserSchema=new mongoose.Schema({
  Username:{
    type:String
  },
  Email:{
    type:String
  },
  Passward:{
    type:String
  },
  ConfirmPassward:{
    type:String
  },
  Country:{
    type:String
  }

})
const User=mongoose.model("UserSchema",UserSchema)
export {User}