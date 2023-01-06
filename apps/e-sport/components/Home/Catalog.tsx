import Image from 'next/image'
import React from 'react'

const catalog=[
  {
    id:1,
    img:"https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg"
  },
  {
    id:2,
    img:"https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg"
  },
  {
    id:3,
    img:"https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/02/dota-2-update-7.31.jpg"
  }
]

const Catalog = () => {
  return (
    <div className='flex items-center mt-3 '>
      {
        catalog.map((item,index)=>{
          return(
            <div key={index} className=" pr-5 pt-4 cursor-pointer ">
               <Image
               src={item.img}
               alt={""}
               width={340}
               height={370}
               className="rounded-3xl"
               />
            </div>
          )
        })
      }
    </div>
  )
}

export default Catalog