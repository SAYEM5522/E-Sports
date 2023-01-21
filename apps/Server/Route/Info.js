import express from "express"
import { AboutRute, getAbout } from "../Controller/InfoControllers.js"
const InfoRouter=express.Router()

InfoRouter.get("/getAbout",getAbout)
InfoRouter.post("/AboutRute",AboutRute)


export {InfoRouter}
