import React from 'react'
import { SavedMovies } from '../Components/SavedMovies'

export const Account = () => {
  return (
    <div className='w-full text-white'>
      <img
        className='w-full h-[400px] object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/6e62bc95-f8cf-40a1-bd75-08f7050c8e23/NL-en-20230626-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
      />
      <div className='fixed bg-black/60 top-0 left-0 w-full h-[400px]'></div>
      <div className='absolute top-[25%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'> My Movies</h1>
      </div>
      <SavedMovies />
    </div>
  )
}
