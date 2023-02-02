import express from "express"
import { CreateBracket, upDateBracket } from "../Controller/BracketControllers.js"
const BracketRoute=express.Router()
BracketRoute.post("/CreateBracket",CreateBracket)
BracketRoute.post("/upDateBracket/:id",upDateBracket)


export {BracketRoute}