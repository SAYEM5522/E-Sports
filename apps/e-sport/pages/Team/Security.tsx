import React from 'react'
import Footer from '../../components/Footer/Footer'
import Layout from '../../components/Layout'
import ProfileSequrity from '../../components/Team/ProfileSequrity'
import TeamLayout from '../../components/TeamLayout'

const Security = () => {
  return (
    <Layout>
      <TeamLayout>
        <ProfileSequrity/>
        <Footer/>
      </TeamLayout>
    </Layout>
  )
}

export default Security