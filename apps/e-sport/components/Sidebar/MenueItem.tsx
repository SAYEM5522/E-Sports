import React from 'react'
import Home from '../Home/Home'
import News from '../News/News'
import Portals from '../Portals/Portals'
import Team from '../Team/Team'
import Tournament from '../Tournament/Tournament'
interface Iindex{
  activeIndex?:any
}
const MenueItem=({activeIndex}:Iindex)=>{
  
  if(activeIndex===0){
   return(
  <Home/>
   )
  }
 else if(activeIndex===1){
   return(
  <Team/>
   )
  }
  else if(activeIndex===2){
   return(
  <Tournament/>
   )
  }
  else if(activeIndex===3){
   return(
     <Portals/>
   )
  }
  else if(activeIndex===4){
   return(
     <News/>
   )
  }
  // else if(activeIndex===5){
  //   console.log("kkk")
  //   return(
  //     <Faq/>
  //   )
  //  }
  return null
  


  
}

export default MenueItem