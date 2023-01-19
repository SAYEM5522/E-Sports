import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useCallback, useRef, useState } from 'react'
import CreateTeam from './CreateTeam';
import RecentMatch from './RecentMatch';

const Team_Info = () => {
 
  return (
    <div className='flex items-start flex-row '>
      <div className='h-96 w-[65%] ml-3 bg-[#222225] '>
        <RecentMatch/>
      </div>
      <div className='bg-[#15141B] h-52 w-[35%] ml-2 mr-2 rounded-md'>
       <CreateTeam/>
      </div>
    </div>
  )
}

export default Team_Info