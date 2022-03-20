import React, { useState, useEffect } from 'react'
import footerData from "../api/footers.json"
import FooterCall from '../ui/FooterCall'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { BiGlobe } from "react-icons/bi"
export default function Footer() {
  const [footer, setFooter] = useState([])

  useEffect(() => {
    //Api Request
    setFooter(footerData)
  }, [])

  return (
    <div className='bg-white '>
      <div className='container mx-auto  '>
        <div className='grid md:grid-cols-4 pt-10 px-6 md:px-0'>
          <div className=' grid gap-y-2 pb-2'>
            <h6 className='text-xl text-primary-brand-color'>Getir'i indirin!</h6>
            <a href='#'>
              <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
            </a>
            <a href='#'>
              <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
            </a>
            <a href='#'>
              <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
            </a>

          </div>
          {footer && footer.map((footerData, index) => <FooterCall key={index} footerData={footerData} />)}
        </div>
        <div className='flex flex-col md:flex-row justify-between py-6 mt-6 mx-4 md:mx-auto'>
          <div className='flex gap-x-3'>
            <span className='text-sm text-gray-700 '>© 2022 Getir</span>
            
              <a href="#" className='text-sm text-primary-brand-color '>Bilgi Toplumu Hizmetleri</a>
            
          </div>
          <div className=' flex gap-x-5 '>
            <a href='#' className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center'>
              <FaFacebook size={22} />
            </a>
            <a href='#' className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center'>
              <FaTwitter size={22} />
            </a>
            <a href='#' className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center'>
              <FaInstagram size={22} />
            </a>
            <a href='#' className='flex gap-x-2  h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color  items-center text-sm'>
              <BiGlobe size={18} />
              Türkçe (TR)
            </a>
          </div>
        </div>
      </div>

    </div>




  )
}
