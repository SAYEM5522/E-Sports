import { Event } from "../Database/Home/Event.js";
import { Banner } from "../Database/Home/Banner.js.js";

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

   const event=new Event({
      data
   })
   try {
      await event.save()
   } catch (error) {
       res.status(401).send({message:"Internal server problem"})
   }
   res.status(201).send(event)
   
}
const getEvent=async(req,res)=>{
   let eventlist
    try {
      eventlist=await Event.find()
    } catch (error) {
      res.status(500).send({message:"Internal Server error"})
    }
   res.status(200).send(eventlist)
}

export {EventRoute,getEvent}