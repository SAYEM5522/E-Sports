import express from "express"
import { CreateBracket, getBracket, upDateBracket } from "../Controller/BracketControllers.js"
const BracketRoute=express.Router()
BracketRoute.post("/CreateBracket",CreateBracket)
BracketRoute.post("/upDateBracket/:id",upDateBracket)
BracketRoute.get("/getBracket/:id",getBracket)



export {BracketRoute}