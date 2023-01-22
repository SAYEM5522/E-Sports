import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { ImTwitter } from 'react-icons/im'
import { useWindowSize } from '../Hooks/useWindowSize'

const Footer = () => {
  const {width,height}=useWindowSize()
  return (
    <div  className="bg-[#1C1B22] w-full text-white py-8 mt-5">
    <div className="p-6 container w-full mx-auto flex-col flex-wrap">
      <div className="w-full md:w-1/4 text-center md:text-left">
        <div>
        <h5 className="text-lg font-medium mb-2">POWERED BY</h5>
        <div className="mb-6">
          <Link href="/">
            <p className="inline-block text-white font-medium hover:text-gray-500 mb-2">
              Esports Pulze AB
            </p>
          </Link>
          <Link href="/">
            <p className="inline-block text-white font-medium hover:text-gray-500">
              Kansligatan 1, Örebro Castle
            </p>
          </Link>
        </div>
        </div>
       <div>
        <h5 className="text-lg font-medium mb-2">SOCIAL</h5>
        <div className="mb-6 flex items-center">
          <Link href="/">
            <FaFacebookF size={30 } className="mr-5"/>
          </Link>
          <Link href="/">
            <BsInstagram size={30} className="mr-5"/>
          </Link>
          <Link href="/">
            <ImTwitter size={30} className="mr-5"/>
          </Link> 
          <Link href="/">
            <FaYoutube size={30} className="mr-5"/>
          </Link>
          <Link href="/">
            <FaTelegramPlane size={30} className="mr-5"/>
          </Link>
          <Link href="/">
            <BsLinkedin size={30}/>
          </Link>
        </div>
        </div>
      </div>
      <div className="w-full flex items-start mt-6 md:w-1/4 text-center md:text-left">
      <div className='w-full mr-10' >
        <h5 className="text-lg font-medium mb-2">SUPPORT</h5>
        <div className="mb-6">
          <p className="text-white font-medium mb-2">Live chat support 24/7</p>
          <p className="text-white font-medium mb-2">(Mon - Sun 00:00 - 23:59)</p>
          <Link href="/">
            <p className="inline-block text-white font-medium hover:text-gray-500">
              Mail support: support@epulze.com
            </p>
          </Link>
        </div>
        </div>
        <div className='w-full mr-10'>
        <h5 className="text-lg font-medium mb-2">CONTACT</h5>
        <div className="mb-6">
          <Link href="/">
            <p className="inline-block text-white font-medium hover:text-gray-500 mb-2">
              Esports Pulze AB
            </p>
          </Link>
          <Link href="/">
            <p className="inline-block text-white font-medium hover:text-gray-500">
              Kansligatan 1, Örebro Castle
            </p>
          </Link>
          </div> 
          </div>
          <div  className='w-full '>
        <h5 className="text-lg font-medium mb-2">LANGUAGE</h5>
        <div className="mb-6">
          <p className="text-white font-medium mb-2">Live chat support 24/7</p>
          <p className="text-white font-medium mb-2">(Mon - Sun 00:00 - 23:59)</p>
          <Link href="/">
            <p className="inline-block text-white font-medium hover:text-gray-500">
              Mail support: support@epulze.com
            </p>
          </Link>
        </div>
        </div>
      </div> 
      <div className="text-white text-sm">
        Copyright &copy; {new Date().getFullYear()} The Vulve
      </div>
        </div>
      </div>
  )
}

export default Footer