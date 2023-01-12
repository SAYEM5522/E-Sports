import React from 'react'
import WalletSidebar from './Wallet/WalletSidebar'

const WalletLayout = ({children}:any) => {
  return (
    <div className=' w-full h-screen    overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden'>
      <WalletSidebar/>
      {
        children
      }
    </div>
  )
}

export default WalletLayout