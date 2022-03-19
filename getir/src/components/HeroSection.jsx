import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {

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
      <Slider {...settings} className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:h-full before:w-full before:z-10">
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
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div className="mx-5  -mt-14 relative left-2 -top-2" >
          <img className="w-44" src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h1 className=" text-white font-semibold text-4xl mt-8">Dakikalar içinde <br /> kapınızda</h1>
        </div>
        <div className="w-[400px] h-[200px] rounded-lg bg-gray-50 relative p-6 -left-6 -top-9">
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
