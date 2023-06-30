import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

export const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { user, signUp } = UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      console.error(error)
      setError(error.message)
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/6e62bc95-f8cf-40a1-bd75-08f7050c8e23/NL-en-20230626-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50 '>
          <div className='max-w-[450px] h-[500px] text-white mx-auto bg-black/75'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-2xl font-bold'>Sign Up</h1>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input
                  onChange={e => setEmail(e.target.value)}
                  className='p-2 my-2 bg-gray-700 rounded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={e => setPassword(e.target.value)}
                  className='p-2 bg-gray-700 rounded my-2'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                {error ? (
                  <p className='mt-4 py-1 px-2 bg-red-500 opacity-70 rounded'>{error}</p>
                ) : null}
                <button
                  type='submit'
                  className='bg-red-600 hover:opacity-100 opacity-90 py-3 my-6 rounded font-bold'
                >
                  Sign Up
                </button>
                <div className='flex items-center justify-between text-sm text-gray-400'>
                  <p>
                    <input type='checkbox' className='mr-2' />
                    Remember me
                  </p>
                  <p>Need Help ?</p>
                </div>
                <p className='text-sm text-gray-400 py-8'>
                  Already subscribed to Netflix?
                  <Link to='/login'>
                    <span className='text-white ml-1'>Sign In</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
