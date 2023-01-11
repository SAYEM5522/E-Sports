import { useRouter } from 'next/router'
import React, { memo } from 'react'
import Layout from '../components/Layout'
import Tournament_Details from '../components/Tournament/Tournament_Details'
import TournamentLayout from '../components/TournamentLayout'

const TournamentDetails = () => {
  return (
    <Layout>
      <TournamentLayout>
        <p>overview</p>
      </TournamentLayout>
    </Layout>
  )
}

export default memo(TournamentDetails)