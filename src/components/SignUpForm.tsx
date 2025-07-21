// import React from 'react'
import Button from './Buttons'
import SecondaryButton from './SecondaryButton'
import { IoIosCheckbox } from "react-icons/io";
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom'

const SignUpForm = () => {
  return (
    <div className='space-y-6 px-20'>
      <h2 className='text-5xl font-semibold py-2'>Create an account</h2>
      <p>
        Already have an account?{' '}
        <Link to="/" className='text-purple-400 underline'>
          Login
        </Link>
      </p>
      <form className='space-y-2'>
        <div className='flex space-x-2'>
          <input type='name' name='First Name' placeholder='First Name' className='bg-gray-600 p-3 rounded outline-none w-full' />
          <input type='name' name='Last Name' placeholder='Last Name' className='bg-gray-600 p-3 rounded outline-none w-full' />
        </div>
        <input type='email' name='Email' placeholder='Email' className='bg-gray-600 p-3 rounded w-full outline-none' />
        <input type='password' name='Password' placeholder='Password' className='bg-gray-600 p-3 rounded w-full outline-none' />
        <div className='flex items-center space-x-2'>
          <IoIosCheckbox />
          <p>I agree to the <a href='#' className='text-purple-400 underline'>Terms & Conditions</a></p>
        </div>
        <Button text="Create account" type="submit" />
        <div className='flex items-center w-full my-4'>
          <hr className='w-full text-gray-500' />
          <p className='w-full text-center text-gray-300'>Or register with</p>
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

export default SignUpForm