import React from 'react'

const TeamMaking = () => {
  return (
    <div className='w-80 h-80 flex-col  ml-auto mr-auto bg-[#15141B] mt-12 rounded-md '>
      <input type={"text"} placeholder="Enter Team Name " className='h-9 ml-3 mr-3 mt-5 pl-1 w-[90%] outline-none placeholder:pl-1 rounded-md '/>
      <input type={"file"} id="actual-btn" hidden />
      <label htmlFor="actual-btn" className='  bg-red-200  rounded-md p-2 cursor-pointer'>Choose Profile</label>

    </div>
  )
}

export default TeamMaking