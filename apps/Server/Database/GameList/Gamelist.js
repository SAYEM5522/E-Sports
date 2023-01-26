import mongoose, { Schema } from "mongoose";
const GameListSchema=new Schema({
  gameName:{
    type:String
  },
  GameImg:{
    type:String
  }
})
const ValorantGameId=new Schema({
  Email:{
    type:String
  },
  Riot_id:{
    type:String
  },
  HashId:{
    type:String
  }
})
const MLBBGameId=new Schema({
  Email:{
    type:String
  },
  Username:{
    type:String
  },
  gameId:{
    type:String
  }
})
const MLBBGame=mongoose.model("MLBBGameId",MLBBGameId)
const ValorantGame=mongoose.model("ValorantGameId",ValorantGameId)
const GameList=mongoose.model("GameListSchema",GameListSchema)
export {GameList,ValorantGame,MLBBGame}