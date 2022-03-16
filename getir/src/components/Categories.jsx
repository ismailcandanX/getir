import React, { useEffect, useState } from 'react'
import CategoryApi from "../api/categories.json"
import CategoryCall from '../ui/CategoryCall';
import TitleCall from '../ui/TitleCall';

export default function Categories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    setCategories(CategoryApi)
  }, [])



  return (
    <div className=' bg-white drop-shadow-sm'>
      <div className=' container mx-auto py-6'>
        <TitleCall>Kategoriler</TitleCall>
        <div className='grid grid-cols-10 '>
          {categories && categories.map((categoryCall, index)=> <CategoryCall key={index} categoryCall={categoryCall} />)}
        </div>

      </div>
    </div>
  )
}
