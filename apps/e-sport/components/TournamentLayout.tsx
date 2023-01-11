import React from 'react'
import TournamentSidebar from './Tournament/TournamentSidebar'

const TournamentLayout = ({children}:any) => {
  return (
    <div>
      <TournamentSidebar/>
      {
        children
      }
    </div>
  )
}

export default TournamentLayout