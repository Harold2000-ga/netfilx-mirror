import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

export const Navbar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex justify-between p-4  item-center z-[100] absolute w-full'>
      <Link to=''>
        <h1 className='text-red-600 text-4xl font bol cursor-pointer'>NETFLIX</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4 hover:text-gray-100'>Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-red-600 hover:opacity-100 opacity-90 px-6 py-2 rounded text-white cursor-pointer'
          >
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4 hover:text-gray-100'>Sign In</button>
          </Link>
          <Link to='signup'>
            <button className='bg-red-600 hover:opacity-100 opacity-90 px-6 py-2 rounded text-white cursor-pointer'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
