import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { router } from "./Route/auth.js"
import { Homerouter } from "./Route/Home.js"
import { Teamrouter } from "./Route/Team.js"
import {InfoRouter} from "./Route/Info.js"
import { ConversationRouter } from "./Route/Conversation.js"
import { GameListRouter } from "./Route/GameList.js"
import mongoose from "mongoose"
import {Server}  from "socket.io"
const PORT=process.env.PORT||8081

const app=express()
app.use(cors())
app.use(bodyParser.json())
// const server = http.createServer(app);
const io = new Server(8080, {
  cors: {
    origin: "http://localhost:3000",
    // methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("send_message", (data) => {
    socket.to(data.conversationId).emit("receive_message", data);
  });
  // socket.on("disconnect", () => {
  //   console.log("User Disconnected", socket.id);
  // });
});

// Route
app.use("/",router)
app.use("/",Homerouter)
app.use("/",Teamrouter)
app.use("/",InfoRouter)
app.use("/",ConversationRouter)
app.use("/",GameListRouter)


const Connection_Url="mongodb+srv://e-sports:zzgWyKRSASNQOkzY@cluster0.sxukpxt.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(Connection_Url,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.once('open',()=>{
  console.log("Connected Successfully")

})


app.listen(PORT,()=>{
  console.log(`Server Started At PORT ${PORT}`)
})

