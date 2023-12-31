import { useEffect, useState } from 'react'
import { options, request } from '../Request'

export const Main = () => {
  const [movies, setMovies] = useState([])
  const [showAll, setShowAll] = useState(false)

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    fetch(request.Popular, options)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
  }, [])

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + ' ...'
    } else {
      return str
    }
  }
  const handleShow = () => {
    setShowAll(!showAll)
  }

  return (
    <div className='w-full h-[500px] text-white'>
      <div className='w-full h-full'>
        <div className='w-full h-[500px] bg-gradient-to-r from-black absolute'></div>
        <img
          className='w-full h-full object-fill'
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Play
            </button>
            <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          <p className='text-sm text-gray-400'>Realesed:{movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {showAll ? movie?.overview : truncateString(movie?.overview, 230)}
          </p>
        </div>
      </div>
    </div>
  )
}
