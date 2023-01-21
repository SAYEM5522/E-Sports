import express from "express"
import { AboutRute, getAbout, getTerms, TermsRoute } from "../Controller/InfoControllers.js"
const InfoRouter=express.Router()

InfoRouter.get("/getAbout",getAbout)
InfoRouter.post("/AboutRute",AboutRute)
InfoRouter.post("/TermsRoute",TermsRoute)
InfoRouter.get("/getTerms",getTerms)




export {InfoRouter}
