import express from "express"
import { createConversation, createMessage, getMessages } from "../Controller/ConversationControllers.js"
const ConversationRouter=express.Router()

ConversationRouter.post("/createMessage",createMessage)
ConversationRouter.get("/getMessages/:conversationId",getMessages)
ConversationRouter.post("/createConversation",createConversation)

export {ConversationRouter}
