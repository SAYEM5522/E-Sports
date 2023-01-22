import React from 'react'
import Footer from '../../components/Footer/Footer'
import Layout from '../../components/Layout'
import ProfileInfo from '../../components/Team/ProfileInfo'
import TeamLayout from '../../components/TeamLayout'

const PSettings = () => {
  return (
    <Layout>
    <TeamLayout>
      <ProfileInfo/>
      <Footer/>
    </TeamLayout>
  </Layout>
  )
}

export default PSettings