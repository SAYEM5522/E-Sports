import React from 'react'
import Layout from '../../components/Layout'
import SelectedTeam from '../../components/Tournament/SelectedTeam'
import TournamentLayout from '../../components/TournamentLayout'

const Teams_List = () => {
  return (
    <Layout>
    <TournamentLayout>
      <SelectedTeam/>
    </TournamentLayout>
    </Layout>
  )
}

export default Teams_List