import React from 'react'
import TeamSidebar from './Team/TeamSidebar'

const TeamLayout = ({children}:any) => {
  return (
    <div>
      <TeamSidebar/>
      {
        children
      }
    </div>
  )
}

export default TeamLayout