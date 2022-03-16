import React, { useEffect, useState } from 'react'
import CategoryApi from "../api/categories.json"
import CategoryCall from '../ui/CategoryCall';

export default function Categories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    setCategories(CategoryApi)
  }, [])



  return (
    <div className=' bg-white'>
      <div className=' container mx-auto py-6'>
        <h6 className='text-sm font-semibold  '>Kategoriler</h6>
        <div className='grid grid-cols-10 '>
          {categories && categories.map((categoryCall, index)=> <CategoryCall key={index} categoryCall={categoryCall} />)}
        </div>

      </div>
    </div>
  )
}
