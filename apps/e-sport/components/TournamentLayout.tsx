import React from 'react'
import TournamentSidebar from './Tournament/TournamentSidebar'

const TournamentLayout = ({children}:any) => {
  return (
    <div className=' w-full h-screen    overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden'>
      <TournamentSidebar/>
      {
        children
      }
    </div>
  )
}

export default TournamentLayout