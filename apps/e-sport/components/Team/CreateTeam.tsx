import React from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
const buttonVariants = {
  idle: {
    scale: 1
  },
  press: {
    scale: 1.06
  }
};
const CreateTeam = () => {
  const router=useRouter()
  const MakeTeam=()=>{
   router.push("/Create_Team")
  }
  return (
    <div className='w-full h-full'>
        <p className='text-white font-serif font-medium text-lg text-center p-3  '>Create Team</p>
        <div className='h-[50%] '>

        </div>
        <motion.button  
        onClick={MakeTeam}
         variants={buttonVariants}
      animate="idle"
      whileHover="hover"
      whileTap="press"
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className='w-[90%] ml-5 mt-2  rounded-sm items-center justify-center  h-8 bg-[#CEFF7F] font-serif  font-medium cursor-pointer text-lg'>Create</motion.button>
    </div>
  )
}

export default CreateTeam