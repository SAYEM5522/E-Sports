import express from "express"
import { EventRoute, EventRule, getEvent, getEventRule } from "../Controller/HomeControllers.js"
const Homerouter=express.Router()
Homerouter.post("/Event",EventRoute)
Homerouter.get("/getEvent",getEvent)
Homerouter.post("/EventRule/:id",EventRule)
Homerouter.get("/getEventRule/:id",getEventRule)

export {Homerouter}

