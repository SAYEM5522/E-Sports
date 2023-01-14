import React from 'react'
import Layout from '../../components/Layout'
import Rules_Info from '../../components/Tournament/Rules_Info'
import TournamentLayout from '../../components/TournamentLayout'

const Rules = () => {
  return (
    <Layout>
    <TournamentLayout>
      <Rules_Info/>
    </TournamentLayout>
    </Layout>
  )
}

export default Rules