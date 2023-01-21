import mongoose from "mongoose"

const TeamSchema=new mongoose.Schema({
  // Main Team
  Teamname:{
    type: String,
  },
  Email:{
    type: String,
  },
  Profile:{

    type:String
  },
  Cover:{
    type:String
  },
  Teammember:[
     {
      temail:{
        type:String
      }
    }
  ]

})
const Team=mongoose.model("TeamSchema",TeamSchema)
export {Team}