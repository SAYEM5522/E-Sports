import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Box, Modal } from '@mui/material';
import AddTeamMember from './AddTeamMember';

const buttonVariants = {
  idle: {
    scale: 1
  },
  press: {
    scale: 1.06
  }
};
const style = {
  position: 'absolute' as 'absolute',
  top: '52%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 460,
  bgcolor: '#1C1B22',
  boxShadow: 24,
  p: 2,
  outline: 0,
  height:550,
};
const TeamMemberList = ({data}:any) => {
  const [openJoin,setOpenJoin]=useState<boolean>(false)
  const AddMember=()=>{
    setOpenJoin(true)
  }

  return (
    <div>
      <p className='font-serif font-bold text-lg text-center border-b border-[rgba(0,0,0,0.4)] text-white py-3'>Team Members</p>
      <div>
        {
          data?.map((item:any,index:number)=>{
            return(
              <div className='pl-7 pt-3 cursor-pointer text-white'>
                <p>{item.temail}</p>
              </div>
            )
          })
        }
      </div>
      <motion.button  
        onClick={AddMember}
         variants={buttonVariants}
      animate="idle"
      whileHover="hover"
      whileTap="press"
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className='w-[90%] ml-5 mt-5  rounded-sm items-center justify-center  h-8 bg-[#CEFF7F] font-serif  font-medium cursor-pointer text-lg'>Add Team Member</motion.button>
       <Modal
        open={openJoin}
        onClose={()=>setOpenJoin(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
     >
        <Box sx={{...style,borderRadius:3}}>
        <AddTeamMember/>
        </Box>

     </Modal>
    </div>
  )
}

export default TeamMemberList