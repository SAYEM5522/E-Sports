
import { Team } from "../Database/Team/Team.js";
import { User } from "../Database/User/User.js";

const AddMember=async(req,res)=>{
  const teamid=req.params.id
  const array=[]
  req.body.map((item)=>{
      array.push(item)  
   })
  const options = { upsert: true };
   try {
    await Team.updateMany(
        {
          _id:teamid
        },
        {
           
     $push:{
        Teammember:array
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
const getMemberList=async(req,res)=>{
    const teamid=req.params.id
    let teamlist
    try {
      teamlist=await Team.find({_id:teamid})
    } catch (error) {
      res.status(500).send({message:"Internal Server error"})
    }
    if(!teamlist){
      return res.status(401).send("team id dosent match")
    }
   return res.status(200).send(teamlist)
   
   }

   const getEachMemberTeamList=async(req,res)=>{
    const email=req.params.email
    let teamlist
    try {
      teamlist=await Team.find({Email:email})
    } catch (error) {
      res.status(500).send({message:"Internal Server error"})
    }
    if(!teamlist){
      return res.status(401).send("email dosent match")
    }
   return res.status(200).send(teamlist)
   
   }

   const getEachTeamInfo=async(req,res)=>{
    const teamId=req.params.id
    let teamlinfo
    let Info
    try {
      teamlinfo=await Team.find({_id:teamId})
    } catch (error) {
      res.status(500).send({message:"Internal Server error"})
    }
    try {
     Info= await User.find({Email:teamlinfo[0].Teammember.map((item)=>item.temail)}).select("-Passward -ConfirmPassward -Country")
    } catch (error) {
      console.log(error)
    }
    if(!teamlinfo){
      return res.status(401).send("id dosent match")
    }
    const TeamObject={
      Teamname:teamlinfo[0].Teamname,
      Profile:teamlinfo[0].Profile,
      Info,
      Email:teamlinfo[0].Email,
      _id:teamlinfo[0]._id
    }
   return res.status(200).send(TeamObject)
   }
export {AddMember,getMemberList,getEachMemberTeamList,getEachTeamInfo}