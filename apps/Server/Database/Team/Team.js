import mongoose from "mongoose"

const TeamSchema=new mongoose.Schema({
  // Main Team
  Teamname:{
    type: String,
    // required: true
  },
  Email:{
    type: String,
    // required: true
  },
  Profile:{
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Upload'
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