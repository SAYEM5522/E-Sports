import mongoose, { Schema } from "mongoose"
const BracketSchema=new mongoose.Schema({
  EventId:{
    type:String
  },
  id:{
    type:Number
  },
  nextMatchId:{
    type:Number
  },
  tournamentRoundText:{
    type:String
  },
  startTime:{
    type:String
  },
  state:{
    type:String
  },
  participants:[
    {
      pid:{
        type:String
      },
      resultText:{
        type:String
      },
      isWinner: {
        type:Boolean
      },
      status:{
        type:String
      },
      name:{
        type:String
      },
      
    }
  ]
})

const Bracket=mongoose.model("BracketSchema",BracketSchema)
export {Bracket}