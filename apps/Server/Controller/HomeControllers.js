import { Event, EventRuleList, ManyVMany, OneVOne } from "../Database/Home/Event.js";
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
    Tournament_Info:req.body.Tournament_Info
   }

   const event=new Event(
      data
   )
   try {
      await event.save()
      return res.status(201).send({message:"Event Created Successfully"})

   } catch (error) {
      return res.status(401).send({message:"Internal server problem"})
   }
   
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
const getSpecificEvent=async(req,res)=>{
  const eventId=req.params.id
  let eventlist
  try {
    eventlist=await Event.find({_id:eventId})

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
const ManyVManyRoute=async(req,res)=>{
   const array=[]
   let ExistingTeam;
  req.body.TeamName.map((item)=>{
      array.push(item)
      
   })
   const data={
      EventId:req.body.EventId,
      MainTeam:req.body.MainTeam,
      Admin:req.body.Admin,
      TeamName:array,
      Profile:req.body.Profile,
      // Date:req.body.Date
   }
   try {
    ExistingTeam=await ManyVMany.find({Admin:req.body.Admin})
   } catch (error) {
    console.log(error)
   }
   if(ExistingTeam.length>0){
    return res.status(401).send("Team with the Same admin already exist")
   }
   const ManyTeam=new ManyVMany(data)
   try {
      await ManyTeam.save()
   } catch (error) {
      return res.status(404).send("Internal problem")
   }
   return res.status(201).send({ManyTeam,message:"Successfully join on the Tournament"})

}
const AddManyvManyMember=async(req,res)=>{
  const teamid=req.params.id
  const array=[]
  req.body.map((item)=>{
      array.push(item)  
   })
  const options = { upsert: true };
   try {
    await ManyVMany.updateMany(
        {
          _id:teamid
        },
        {
           
     $push:{
      TeamName:array
          },
        },
        options,
      )
      return res.status(201).send("Member Added Successfully")
   } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
   }

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
  const getManyVMany=async(req,res)=>{
   const Eventid=req.params.id
   let eventrulelist
   

   try {
     eventrulelist=await ManyVMany.find({EventId:Eventid})
   } catch (error) {
     res.status(500).send({message:"Internal Server error"})
   }
   if(!eventrulelist){
     return res.status(401).send("Event id dosent match")
   }

  return res.status(200).send(eventrulelist)

  }
  const EachUserTournamentlist=async(req,res)=>{
    const email=req.params.email
    let eventList;
    let info;
    let MainInfo

    try {
     eventList=await Event.find()
    } catch (error) {
      console.log(error)
    }

    try {
      info =await ManyVMany.find({EventId:eventList.map((item)=>item._id)})
    } catch (error) {
      return res.status(401).send("email dosen't match")
    }
   let information=info.filter((t) => t.TeamName.some((member) => member.TName === email))
   try {
    MainInfo=await Event.find({_id:information.map((item)=>item.EventId)})
   } catch (error) {
    console.log(error)
   }
   const EachData={
      MainInfo:MainInfo.map((item,index)=>{
      return{
        _id:item._id,
        game:item.GName,
        server:item.Server,
        mode:item.Mode,
        date:item.Date,
        team:information.map((value)=>value.MainTeam)[index]
      }
    }),
   }
   res.status(201).send(EachData)

  }
 

export {EventRoute,getEvent,EventRule,
   getEventRule,OneVOneRoute,getOneVOne,
   ManyVManyRoute,getManyVMany,getSpecificEvent,
   AddManyvManyMember,EachUserTournamentlist}