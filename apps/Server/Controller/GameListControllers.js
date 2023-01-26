import { GameList, MLBBGame, ValorantGame } from "../Database/GameList/Gamelist.js"

const GameListRoute=async(req,res)=>{
   const data={
    gameName:req.body.gameName,
    GameImg:req.body.GameImg
   }
  try {
   const info=await new GameList(data).save()
   return res.status(201).send(info)
  } catch (error) {
    console.log(error)
  }
}
const getGameListRoute=async(req,res)=>{
  let gameInfo;
   try {
    gameInfo=await GameList.find()
   return res.status(200).send(gameInfo)

   } catch (error) {
    console.log(error)
    
   }
}
const ValorantGameId=async(req,res)=>{
  let ValorantInfo;
  const data={
    Email:req.body.Email,
    Riot_id:req.body.Riot_id,
    HashId:req.body.HashId
  }
  try {
   ValorantInfo= await new ValorantGame(data).save()
   return res.status(201).send(ValorantInfo)
  } catch (error) {
    console.log(error)
  }

}
const MLBBGameId=async(req,res)=>{
  let MllbInfo;
  const data={
    Email:req.body.Email,
    Username:req.body.Username,
    gameId:req.body.gameId
  }
  try {
    MllbInfo= await new MLBBGame(data).save()
   return res.status(201).send(MllbInfo)
  } catch (error) {
    console.log(error)
  }

}
export {GameListRoute,getGameListRoute,ValorantGameId,MLBBGameId}