import express from "express"
import { createTeam } from "../Controller/TeamControllers.js"
const Teamrouter=express.Router()
Teamrouter.post("/Team",createTeam)


export {Teamrouter}

