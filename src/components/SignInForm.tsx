// import React from 'react'
import { Link } from 'react-router-dom'
import SecondaryButton from './SecondaryButton'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import Button from './Buttons'

const SignInForm = () => {
  return (
    <div className='space-y-6 px-20'>
        <h2 className='text-5xl font-semibold py-2'>Login to account</h2>
        <p>
          Don't have an account?{' '}
          <Link to="/signup" className='text-purple-400 underline'>
            SignUp
          </Link>
        </p>
        <form className='space-y-2 w-full'>
            <input type='email' name='Email' placeholder='Email' className='bg-gray-600 p-3 rounded w-full outline-none' />
            <input type='password' name='Password' placeholder='Password' className='bg-gray-600 p-3 rounded w-full outline-none' />
            <Button text="Login" type="submit" />
            <div className='flex items-center w-full my-4'>
                <hr className='w-full text-gray-500' />
                <p className='w-full text-center text-gray-300'>Or Login with</p>
                <hr className='w-full text-gray-500' />
            </div>
            <div className='flex items-center space-x-2 w-full'>
                <div className='flex items-center w-full'>
                <SecondaryButton>
                  <FcGoogle size={23} />
                  Google
                </SecondaryButton>
            </div>
                <div className='flex items-center w-full'>
                <SecondaryButton>
                  <FaApple size={23} />
                  Apple
                </SecondaryButton>
            </div>
            </div>
        </form>
    </div>
  )
}

export default SignInForm