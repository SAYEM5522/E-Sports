import Image from 'next/image'
import React from 'react'
import Banner from '../components/Home/Banner'
import Catalog from '../components/Home/Catalog'
import LandingLayout from '../components/LandingLayout'

const LandingPage = () => {
  return (
    <LandingLayout>
      <div className='h-full w-full grid place-items-center bg-[#222225] '>
        <div className=' w-[85%]'>
          <div className='h-full w-full grid place-items-center'>
          <Catalog/>

          </div>
      <div className={`relative h-80 w-[100%]  mb-12`}>
      <Image
      src={"https://cdn.epulze.com/cms/aa174eef-006b-4a1d-b301-07de99c33251-csgo_tournament_2v2beta07_background-webp"}
      alt="B"
      fill
      className="self-center  mt-8 rounded-3xl object-cover cursor-pointer"
      
      />
    </div>
        </div>
    
      </div>
    
    </LandingLayout>
  )
}

export default LandingPage