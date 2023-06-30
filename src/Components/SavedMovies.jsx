import { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../Context/AuthContext'
import { db } from '../firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import noPicture from '../assets/noPicture.jpg'
import { AiOutlineClose } from 'react-icons/ai'
export const SavedMovies = () => {
  const [movies, setMovies] = useState([])
  const { user } = UserAuth()

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), doc => {
      setMovies(doc.data()?.savedMovies)
    })
  }, [user?.email])

  const slideLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteMovie = async id => {
    try {
      const result = movies.filter(item => item.id !== id)
      await updateDoc(movieRef, { savedMovies: result })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>Favorites</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white text-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={25}
        />
        <div
          id={'slider'}
          className='w-full relative h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {movies &&
            movies.map(movie => (
              <div
                key={movie.id}
                className='w-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2'
              >
                <img
                  className='w-full h-full '
                  src={movie?.img ? `https://image.tmdb.org/t/p/w500${movie?.img}` : noPicture}
                  alt={movie?.title}
                />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                  <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {movie?.title ? movie.title : movie.original_title}
                  </p>
                  <AiOutlineClose
                    onClick={() => deleteMovie(movie.id)}
                    className=' cursor-pointer absolute hover:text-white text-gray-300 top-4 right-4'
                  />
                </div>
              </div>
            ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={30}
          className='bg-white text-black rounded-full absolute right-0 hidden group-hover:block opacity-50 hover:opacity-100 cursor-pointer z-10'
        />
      </div>
    </div>
  )
}
