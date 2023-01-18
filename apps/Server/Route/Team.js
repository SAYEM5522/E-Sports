import express from "express"
import { AddMember, createTeam, getEachMemberTeamList, getEachTeamInfo, getMemberList } from "../Controller/TeamControllers.js"
const Teamrouter=express.Router()
Teamrouter.post("/Team",createTeam)
Teamrouter.post("/Addmember/:id",AddMember)
Teamrouter.get("/getMemberList/:id",getMemberList)
Teamrouter.get("/getEachMemberTeamList/:email",getEachMemberTeamList)
Teamrouter.get("/getEachTeamInfo/:id",getEachTeamInfo)






export {Teamrouter}

