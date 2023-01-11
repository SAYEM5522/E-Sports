import React from 'react'
import Banner from '../components/Home/Banner'
import Catalog from '../components/Home/Catalog'
import LandingLayout from '../components/LandingLayout'

const LandingPage = () => {
  return (
    <LandingLayout>
    <Catalog/>
    <Banner/>
    </LandingLayout>
  )
}

export default LandingPage