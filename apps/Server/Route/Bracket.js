import express from "express"
import { CreateBracket } from "../Controller/BracketControllers.js"
const BracketRoute=express.Router()
BracketRoute.post("/CreateBracket",CreateBracket)

export {BracketRoute}