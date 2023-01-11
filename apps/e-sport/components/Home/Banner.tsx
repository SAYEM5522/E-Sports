import Image from 'next/image'
import React from 'react'
import { useWindowSize } from '../Hooks/useWindowSize'

const Banner = () => {
  const {height,width}=useWindowSize()

  return (
    <div className={`relative h-80 w-[95%]  mb-12`}>
      <Image
      src={"https://cdn.epulze.com/cms/aa174eef-006b-4a1d-b301-07de99c33251-csgo_tournament_2v2beta07_background-webp"}
      alt="B"
      fill
      className="self-center  mt-8 rounded-3xl object-cover"
      
      />
    </div>
  )
}

export default Banner