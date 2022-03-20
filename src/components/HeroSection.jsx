import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowWidth } from '@react-hook/window-size'

export default function HeroSection() {

  const windowWidth = useWindowWidth()

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  return (
    <div>
      {windowWidth  > 768  && <Slider {...settings} className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:h-full before:w-full before:z-10">
        <div>
          <img className="w-full h-[500px] object-cover " src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover " src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover " src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover " src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover " src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
        </div>
      </Slider> }
      <div className="md:container flex justify-between items-center relative md:absolute top-10 md:top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 md:h-[500px] z-20">
        <div className="hidden md:block" >
          <img className="" src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h1 className="w-auto max-w-[350px] text-4xl text-white font-semibold mt-6">Dakikalar içinde kapınızda</h1>
        </div>
        <div className="w-full md:w-[400px] h-[200px] rounded-lg bg-gray-50 relative p-6 md:-left-6 top-6">
          <h5 className="text-primary-brand-color text-center text-base font-semibold pb-2">Giriş yap veya kayıt ol</h5>
          <div>
            <label className="flex-1 relative block ">
              <input required className="w-full px-4 h-14 border-2 border-gray-200 transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none rounded peer pt-2 text-sm" />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-gray-500 peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs  text-sm">Telefon Numarası</span>
            </label>
          </div>
          <div className="pt-4">
            <button className="bg-brand-yellow text-brand-color transition-colors hover:bg-brand-color hover:text-brand-yellow w-full h-12 rounded-md text-sm font-semibold">
              Telefon numarası ile devam et
            </button>
          </div>
        </div>



      </div>
    </div>
  )
}
