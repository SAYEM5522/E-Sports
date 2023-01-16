import express from "express"
import { EventRoute, EventRule, getEvent, getEventRule, getOneVOne,
   ManyVManyRoute, OneVOneRoute,getManyVMany, getSpecificEvent, AddManyvManyMember } from "../Controller/HomeControllers.js"
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




export {Homerouter}

