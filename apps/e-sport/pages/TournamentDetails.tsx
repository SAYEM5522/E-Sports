import { useRouter } from 'next/router'
import React, { memo } from 'react'
import Layout from '../components/Layout'
import Tournament_Details from '../components/Tournament/Tournament_Details'

const TournamentDetails = () => {
  return (
    <Layout>
      <Tournament_Details/>
    </Layout>
  )
}

export default memo(TournamentDetails)