import { Event, EventRuleList, OneVOne } from "../Database/Home/Event.js";
import { Banner } from "../Database/Home/Banner.js";

const EventRoute=async(req,res)=>{
   const data={
    Logo: req.body.Logo,
    GName: req.body.GName,
    Server: req.body.Server,
    EntryFee: req.body.EntryFee,
    Date: req.body.Date,
    Mode: req.body.Mode,
    Slot: req.body.Slot,
    Banner: req.body.Banner,
   }

   const event=new Event(
      data
   )
   try {
      await event.save()
   } catch (error) {
       res.status(401).send({message:"Internal server problem"})
   }
  return res.status(201).send(event)
   
}
const getEvent=async(req,res)=>{
   let eventlist
    try {
      eventlist=await Event.find()
    } catch (error) {
      res.status(500).send({message:"Internal Server error"})
    }
  return res.status(200).send(eventlist)
}
const EventRule=async(req,res)=>{
   const id=req.params.id
  
   const data={
      EventId:id,
      Rules:req.body
   }
   
   const RuleList=new EventRuleList(data)
  
       try {
         await RuleList.save()
       } catch (error) {
         return res.status(404).send("Internal server error")
       }
      return res.status(201).send(RuleList)
   
   
}
const getEventRule=async(req,res)=>{
 const id=req.params.id
 let eventrulelist
 try {
   eventrulelist=await EventRuleList.find({EventId:id})
 } catch (error) {
   res.status(500).send({message:"Internal Server error"})
 }
 if(!eventrulelist){
   return res.status(401).send("Event id dosent match")
 }
return res.status(200).send(eventrulelist)

}
const OneVOneRoute=async(req,res)=>{
   const {EventId,TeamId,Teamname,Profile}=req.body
   const data={
      EventId,
      TeamId,
      Teamname,
      Profile
   }
   const OneTeam=new OneVOne(data)
   try {
      await OneTeam.save()
   } catch (error) {
       return res.status(404).send("Internal problem")
   }
 return res.status(201).send(OneTeam)

}
const getOneVOne=async(req,res)=>{
   const Eventid=req.params.id
   let eventrulelist
   try {
     eventrulelist=await OneVOne.find({EventId:Eventid})
   } catch (error) {
     res.status(500).send({message:"Internal Server error"})
   }
   if(!eventrulelist){
     return res.status(401).send("Event id dosent match")
   }
  return res.status(200).send(eventrulelist)
  
  }

export {EventRoute,getEvent,EventRule,getEventRule,OneVOneRoute,getOneVOne}