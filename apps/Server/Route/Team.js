import express from "express"
import { AddMember, createTeam, getMemberList } from "../Controller/TeamControllers.js"
const Teamrouter=express.Router()
Teamrouter.post("/Team",createTeam)
Teamrouter.post("/Addmember/:id",AddMember)
Teamrouter.get("/getMemberList/:id",getMemberList)




export {Teamrouter}

