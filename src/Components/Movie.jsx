/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import noPicture from '../assets/noPicture.jpg'
import { UserAuth } from '../Context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

export const Movie = ({ item }) => {
  const { user } = UserAuth()
  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)

  const movieId = doc(db, 'users', `${user?.email}`)

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like)
      setSaved(true)
      await updateDoc(movieId, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      })
    } else {
      alert('Please LogIn to a Account')
    }
  }

  return (
    <div className='w-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <img
        className='w-full h-full '
        src={
          item.backdrop_path ? `https://image.tmdb.org/t/p/w500${item?.backdrop_path}` : noPicture
        }
        alt={item.title}
      />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {item?.title ? item.title : item.original_title}
        </p>
        <p onClick={saveMovie}>
          {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' />
          ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
          )}
        </p>
      </div>
    </div>
  )
}
