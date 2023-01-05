import React from 'react'
import { IconType } from 'react-icons'

interface Props {
  Icon: IconType
}
function IconItem({Icon}:Props) {
  return (
    <div   
    >
        <Icon className='cursor-pointer text-white dark:text-white ' size={28}  />
    </div>
  )
}

export default IconItem