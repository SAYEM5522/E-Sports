import Image from 'next/image'
import React from 'react'
import { useWindowSize } from '../Hooks/useWindowSize'

const Banner = () => {
  const {height,width}=useWindowSize()

  return (
    <div>
      <Image
      src={"https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_60b4f959497899515f46012df805b0006ef21af6.1920x1080.jpg?t=1668125812"}
      alt="B"
      width={width/1.5}
      height={height/3}
      className="self-center ml-auto mr-auto mt-8 rounded-3xl"
      
      />
    </div>
  )
}

export default Banner