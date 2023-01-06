import Image from 'next/image'
import React from 'react'
import { useWindowSize } from '../Hooks/useWindowSize'

const Banner = () => {
  const {height,width}=useWindowSize()

  return (
    <div className={`relative h-80 w-11/12 ml-auto mr-auto mb-12`}>
      <Image
      src={"https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_60b4f959497899515f46012df805b0006ef21af6.1920x1080.jpg?t=1668125812"}
      alt="B"
      fill
      className="self-center  mt-8 rounded-3xl"
      
      />
    </div>
  )
}

export default Banner