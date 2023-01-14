import { useRouter } from 'next/router'
import React, { memo } from 'react'
import Layout from '../components/Layout'
import Tournament_Details from '../components/Tournament/Tournament_Details'
import TournamentLayout from '../components/TournamentLayout'

const TournamentDetails = () => {
  return (
    <Layout>
      <TournamentLayout>
        <Tournament_Details/>
      </TournamentLayout>
    </Layout>
  )
}

export default memo(TournamentDetails)