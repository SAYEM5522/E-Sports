import React from 'react'
import { motion } from 'framer-motion';

const buttonVariants = {
  idle: {
    scale: 1
  },
  press: {
    scale: 1.06
  }
};
const TeamMaking = () => {
  return (
    <div className='w-80 h-80 flex-col  ml-auto mr-auto bg-[#15141B] mt-12 rounded-md '>
      <input type={"text"} placeholder="Enter Team Name " className='h-9 ml-3 mr-3 mt-5 pl-1 w-[90%] outline-none placeholder:pl-1 rounded-md '/>
      <div className='mt-10 ml-4 '>
      <input type={"file"} id="actual-btn" hidden />
      <label htmlFor="actual-btn" className='  bg-red-200  rounded-md p-2 px-10 cursor-pointer'>Choose Profile</label>
      </div>
      <div className='mt-10 ml-4 '>
      <input type={"file"} id="actual-btn" hidden />
      <label htmlFor="actual-btn" className='  bg-red-200  rounded-md p-2 px-5 cursor-pointer'>Choose Cover Photo</label>
      </div>
      <motion.button  
         variants={buttonVariants}
      animate="idle"
      whileHover="hover"
      whileTap="press"
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className='w-[90%] ml-3 mr-3 mt-8  rounded-md items-center justify-center  h-9 bg-[#CEFF7F] font-serif  font-medium cursor-pointer text-lg'>Create</motion.button>

     

    </div>
  )
}

export default TeamMaking