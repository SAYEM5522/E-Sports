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
    <div className='flex flex-wrap items-center mt-3
       '>
      {
        catalog.map((item,index)=>{
          return(
            <div key={index}  className="   relative w-[330px] h-[300px] mr-6 pt-4 cursor-pointer ">
               <Image
               src={item.img}
               alt={""}
              fill
               className="mx-w-[330px] mx-h-[300px] rounded-3xl absolute object-cover hover:ease-in-out hover:scale-[1.02] hover:rounded-3xl hover:border  hover:border-green-500 "
               />
            </div>
          )
        })
      }
    </div>
  )
}

export default Catalog