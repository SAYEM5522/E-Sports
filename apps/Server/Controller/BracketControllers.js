import { Bracket } from "../Database/Bracket/Bracket.js";

const CreateBracket=async(req,res)=>{
   let BracketInfo;
   let array=[];
   req.body.participants.map((item)=>{
    array.push(item)
   }) 
   const data={
    EventId:req.body.EventId,
    id: req.body.id,
    nextMatchId: req.body.nextMatchId,
    tournamentRoundText:req.body.tournamentRoundText,
    startTime: req.body.startTime,
    state: req.body.state,
    participants:array
    
   }
  try {
    BracketInfo=new Bracket(data)
    await BracketInfo.save()
  } catch (error) {
    console.log(error)
  }
  return res.status(201).send(BracketInfo)
}

const getBracket=async(req,res)=>{
  const eventid=req.params.id
  let data;
  try {
    data=await Bracket.find({EventId:eventid}).select("-_id -EventId")
  } catch (error) {
    console.log(error)
  }
  return res.status(201).send(data)
}

const upDateBracket=async(req,res)=>{
  const id=req.params.id;
  let array=[];
   req.body.map((item)=>{
    array.push(item)
   })

  let item;
  try {
   item= await Bracket.updateOne({id:id},{ $set: { participants: array }})
    return res.status(201).send(item)
  } catch (error) {
    console.log(error)
    
  }
}

export {CreateBracket,upDateBracket,getBracket}