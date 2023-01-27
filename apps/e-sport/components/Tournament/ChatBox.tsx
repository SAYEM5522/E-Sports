import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { IoSend } from 'react-icons/io5'
import {io} from "socket.io-client";
const ChatBox = () => {
  const [message,setMessage]=useState<any>("")
  const [messageList,setMessageList]=useState<any>([])
  const [arrivalMessage, setArrivalMessage] = useState<any>(null);
  const scrollRef = useRef<any>();
  const c:string="md1040582@gmail.com"
  const socket = useRef<any>();
  
  useEffect(() => {
    setMessageList((prev:any) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);
  const SubmitMessage=async()=>{
    
    const data={
      conversationId:"63d26e61fb6f620951ca6cd8",
      sender:"md1040582@gmail.com",
      text:message

    }
    if(message===""){
      return 
    }
    else{
      await socket.current.emit("send_message", data);
      await axios.post("http://localhost:8081/createMessage",data).then((res)=>{
      //  setMessageList([...message,res.data])
       }).catch((err)=>{
          console.log(err)
       })
       setMessage("")

    }
    
  
  }
  const getMessageList=async()=>{
    const con="63d26e61fb6f620951ca6cd8"
    socket.current = io("ws://localhost:8080");
    socket.current.on("receive_message", (data:any) => {
      setArrivalMessage(data);
    });
    await axios.get(`http://localhost:8081/getMessages/${con}`).then((res)=>{
      setMessageList(res.data)
     }).catch((err)=>{
      console.log(err)
     })
  }
  useEffect(()=>{
     getMessageList(),
     ()=>getMessageList(),
     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  },[messageList])
  return (
    <div className='h-[90%] w-[340px] bg-[#1C1B22] rounded-md ml-5 relative mt-1'>
      
      <div className='flex items-center h-12 px-3 bg-[#15141B] rounded-t-md'>
        <p className='text-white font-serif font-bold text-lg italic'>Dota 2 </p>
        <div className='w-[100px] h-5 relative ml-4'>
        <Image
        src={"/../public/logo2.png"}
        alt=""
        fill
        className="object-fill cursor-pointer"
        />
       </div>
      </div>
      <div className='h-[83%] flex flex-col   overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden  '>
        {
          messageList.map((item:any,index:number)=>{
            return(
              <div   key={index} className={`p-1  flex  items-end ${c===item?.sender?'ml-auto':'float-left'} `}  >
              <div className='w-5  h-5 relative mr-[1px]'>
               <Image
               src={"https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg"}
               alt=""
               fill
               className="object-cover cursor-pointer rounded-[10px]"
               />
              </div>
              <p  className={`h-fit mx-w-[290px] cursor-pointer  text-sm text-white font-serif text-wrap  w-fit p-1 ${c===item?.sender?'bg-orange-400':'bg-emerald-900'}  rounded-md `}>{item?.text}</p>
             
              </div>
            )
          })
        }
      </div>
       <input placeholder='Message' value={message} type={"text"} onChange={(e:any)=>setMessage(e.target.value)} className="h-10 w-[80%] absolute bottom-1 text-white left-0 right-0 outline-none rounded-md ml-2 mr-2  bg-transparent p-2 border "/>
       <IoSend onClick={SubmitMessage} className='absolute bottom-2 right-4 cursor-pointer ' color='white'  size={26} />
    </div>
  )
}

export default ChatBox