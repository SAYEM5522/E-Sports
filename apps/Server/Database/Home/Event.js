import mongoose from "mongoose"

const EventSchema=new mongoose.Schema({
  Logo: {type:String},
  GName: {type:String,trim:true},
  Server: {type:String},
  EntryFee: {type:Number},
  Date: {type: Date},
  Mode: {type:String},
  Slot:{type:Number},
  Banner: {type:String},
  Createtime:{ type: Date, default: Date.now },
  Tournament_Info:{type:String}

})
const EventRuleSchema=new mongoose.Schema({
   EventId:{
    type:String
  },
  Rules:[
    {
      caption:{type:String},
      details:{type:String}

    }
  ]

})
const OneVOneSchema=new mongoose.Schema({
  EventId:{
   type:String
 },
  TeamId:{
    type:String
   },
  Teamname:{
    type:String
  },
  Profile:{
    type:String
  }

})
const ManyVManySchema=new mongoose.Schema({
  EventId:{
   type:String
 },
  MainTeam:{
    type:String
  },
 TeamName:[
    {
      TeamId:{
        type:String
       },
      TName:{
        type:String
      },
      Pic:{
        type:String
      }
    }
  ],
  Profile:{
    type:String
  },
  Date:{
    type:String
  }

})
const Event=mongoose.model("EventSchema",EventSchema)
const EventRuleList=mongoose.model("EventRuleSchema",EventRuleSchema)
const OneVOne=mongoose.model("OneVOneSchema",OneVOneSchema)
const ManyVMany=mongoose.model("ManyVManySchema",ManyVManySchema)


export {Event,EventRuleList,OneVOne,ManyVMany}