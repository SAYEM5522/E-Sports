import mongoose, { Schema } from "mongoose";
const GameListSchema=new Schema({
  gameName:{
    type:String
  },
  GameImg:{
    type:String
  }
})
const GameList=mongoose.model("GameListSchema",GameListSchema)
export {GameList}