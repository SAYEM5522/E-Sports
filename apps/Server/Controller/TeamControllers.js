// import { gfs } from "..";
import { gfs } from "../index.js";
import fs from "gridfs-stream"
import { Team } from "../Database/Team/Team.js";
const createTeam = async (req, res) => {
  try {
      const { Teamname, Email,Profile } = req.body;
      const file = req.file;
      // console.log(req.body.Profile)
      // let writeStream = gfs.createWriteStream({
      //     filename: file.originalname,
      //     mode: 'w',
      //     content_type: file.mimetype,
      // });
      // fs.createReadStream(file.path).pipe(writeStream);
      // writeStream.on('close', async (file) => {
          const item = new Team({
              Teamname: Teamname,
              Email: Email,
              Profile: Profile
          });
          await item.save();
          return res.status(200).json({data:item, message: 'Item created successfully' });
      // });
  } 
  catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
  }
};
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
 

export {createTeam,AddMember,getMemberList}