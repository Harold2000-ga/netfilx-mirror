import { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { options } from '../Request'
import { Movie } from './Movie'
import { UserAuth } from '../Context/AuthContext'
//import { doc, onSnapshot } from 'firebase/firestore'
//import { db } from '../firebase'

export const Row = ({ title, url, rowId }) => {
  //const [idMovies, setIdMovies] = useState([])
  const [movies, setMovies] = useState([])
  const { user } = UserAuth()

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)
      })
    /* .then(() => {
        if (user) {
          const emptyArray = []
          onSnapshot(doc(db, 'users', `${user?.email}`), doc => {
            setIdMovies(doc.data()?.savedMovies.map(item => emptyArray.push(item.id)))
            setIdMovies(emptyArray)
          })
        }
      }) */
  }, [url, user])

  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={30}
        />
        <div
          id={'slider' + rowId}
          className='w-full relative h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {movies?.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={30}
          className='bg-white rounded-full absolute right-0 hidden group-hover:block opacity-50 hover:opacity-100 cursor-pointer z-10'
        />
      </div>
    </div>
  )
}
