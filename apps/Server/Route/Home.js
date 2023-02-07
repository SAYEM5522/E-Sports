import express from "express"
import { EventRoute, EventRule, getEvent, getEventRule, getOneVOne,
   ManyVManyRoute, OneVOneRoute,getManyVMany, getSpecificEvent, AddManyvManyMember,
    EachUserTournamentlist, createMapBan, createServerBan, updateSelectedMap, UpdateMapStatus } from "../Controller/HomeControllers.js"

const Homerouter=express.Router()
Homerouter.post("/Event",EventRoute)
Homerouter.get("/getEvent",getEvent)
Homerouter.post("/EventRule/:id",EventRule)
Homerouter.get("/getEventRule/:id",getEventRule)
Homerouter.post("/OneVOneRoute",OneVOneRoute)
Homerouter.get("/getOneVOneRoute/:id",getOneVOne)
Homerouter.post("/ManyVManyRoute",ManyVManyRoute)
Homerouter.get("/getManyVManyRoute/:id",getManyVMany)
Homerouter.get("/getSpecificEvent/:id",getSpecificEvent)
Homerouter.post("/AddManyvManyMember/:id",AddManyvManyMember)
Homerouter.get("/EachUserTournamentlist/:email",EachUserTournamentlist)

Homerouter.post("/createMapBan",createMapBan)
Homerouter.post("/createServerBan",createServerBan)
Homerouter.post("/updateSelectedMap/:eventId",updateSelectedMap)
Homerouter.post("/UpdateMapStatus/:eventId",UpdateMapStatus)


export {Homerouter}

