import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Logout = () => {
  const router=useRouter()
  useEffect(() => {
    Cookies.remove('token');
    router.push('/LandingPage');
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default Logout