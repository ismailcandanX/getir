import React, { useState, useEffect } from 'react'
import TitleCall from './../ui/TitleCall';
import FavoritesApi from '../api/favorites.json'
import FavoritesCall from "../ui/FavoriteCall"

export default function Favorites() {
  const [favorite, setFavorites] = useState([])
  useEffect(() => {
    setFavorites(FavoritesApi)
  }, [])


  return (
    <div className='container mx-auto '>
      <div>
        <TitleCall ><div className='mb-2'>Favoriler</div></TitleCall>
        <div className='grid grid-cols-8 bg-white '>
          {favorite && favorite.map((favoritesApi, index) => <FavoritesCall key={index} favoritesApi={favoritesApi} />)}</div>
      </div>
    </div>
  )
}
