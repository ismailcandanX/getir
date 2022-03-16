import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannersApi from "../api/banners.json"
import CampaignsCall from "../ui/CampaignsCall"
import TitleCall from '../ui/TitleCall';

export default function Campaigns() {
  const [banners, setBanners] = useState([])
  useEffect(() => {
    setBanners(BannersApi)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };
  return (
    <div className='container  mx-auto py-6'>
      <TitleCall>Kampanyalar</TitleCall>
      <Slider {...settings} className="relative ">
        {banners && banners.map((bannersCall, index) => <CampaignsCall key={index} bannersCall={bannersCall} />)}
      </Slider>
    </div>
  )
}
