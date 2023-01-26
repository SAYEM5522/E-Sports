import express from "express"
import { GameListRoute, getGameListRoute, MLBBGameId, ValorantGameId } from "../Controller/GameListControllers.js"
const GameListRouter=express.Router()

GameListRouter.post("/GameListRoute",GameListRoute)
GameListRouter.get("/getGameListRoute",getGameListRoute)
GameListRouter.post("/ValorantGameId",ValorantGameId)
GameListRouter.post("/MLBBGameId",MLBBGameId)


export {GameListRouter}


