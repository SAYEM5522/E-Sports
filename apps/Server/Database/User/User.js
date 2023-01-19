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
  },
  city: {
    type: String,
},
zipcode: {
    type: Number,
},
phone: {
    type: String,
},
dob: {
    year: {
        type: Number,
    },
    month: {
        type: Number,
    },
    day: {
        type: Number,
    }
}

})
const User=mongoose.model("UserSchema",UserSchema)
export {User}