import express from "express"
import { EventRoute, getEvent } from "../Controller/HomeControllers.js"
const router=express.Router()
router.post("/Event",EventRoute)
router.post("/getEvent",getEvent)
