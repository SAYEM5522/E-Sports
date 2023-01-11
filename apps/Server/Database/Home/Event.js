import mongoose from "mongoose"

const EventSchema=new mongoose.Schema({
  Logo: {type:String},
  GName: {type:String,trim:true},
  Server: {type:String},
  EntryFee: {type:String},
  Date: {type:String},
  Mode: {type:String},
  Slot: {type:String},
  Banner: {type:String},
})
const Event=mongoose.model("EventSchema",EventSchema)
export {Event}