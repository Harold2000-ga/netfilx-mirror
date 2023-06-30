import { useEffect, useState } from 'react'
import { Main } from '../Components/Main'
import { Row } from '../Components/Row'
import { request } from '../Request'

export const Home = () => {
  const genres = ['Actions', 'Drama', 'Comedy']
  const [selected, setSelected] = useState(genres[0])

  const handleSelect = item => {
    setSelected(item)
  }

  useEffect(() => {}, [])

  return (
    <div>
      <Main />
      <Row rowId='1' title='Up Coming' url={request.Upcoming} />
      <Row rowId='2' title='Popular' url={request.Popular} />
      <Row rowId='3' title='Trending' url={request.Trending} />
      <Row rowId='4' title='Top Rated' url={request.TopRated} />
      {/* <select className='px-4 py-2 border-white border rounded-md   ml-2 bg-transparent text-white'>
        <option value='comedy' className='bg-black text-white hover:cursor-pointer'>
          Comedy
        </option>
        <option value='horror' className='bg-black text-white'>
          Horror
        </option>
        <option value='action' className='bg-black text-white'>
          Action
        </option>
        <option value='drama' className='bg-black text-white'>
          Drama
        </option>
      </select> */}
      <div className='flex flex-start p-4 gap-6'>
        {genres.map((item, id) => (
          <p
            onClick={() => handleSelect(item)}
            key={id}
            className='text-white  hover:border-white border border-black  px-4 py-2 rounded-md hover:cursor-pointer'
          >
            {item}
          </p>
        ))}
      </div>
      <Row
        rowId='5'
        title={selected}
        url={`https://api.themoviedb.org/3/search/movie?query=${selected}&include_adult=false&language=en-US&page=1`}
      />
    </div>
  )
}
