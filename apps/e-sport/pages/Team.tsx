import React from 'react'
import Footer from '../components/Footer/Footer'
import Layout from '../components/Layout'
import Team_Info from '../components/Team/Team_Info'
import TeamLayout from '../components/TeamLayout'

const Team = () => {
  return (
    <Layout>
      <TeamLayout>
        <Team_Info/>
         <Footer/>
      </TeamLayout>
    </Layout>
  )
}

export default Team