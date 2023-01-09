import React from 'react'
import Banner from '../Home/Banner'
import Catalog from '../Home/Catalog'

const LanDing_Page = () => {
  return (
    <div className={`flex flex-col 'ml-7':'ml-36'} h-[35.55rem]   overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden`}>
    <Catalog/>
<div>
<Banner/>
</div>


</div>

  )
}

export default LanDing_Page