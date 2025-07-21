// import React from 'react'
import Carousel from '../components/Carousel'
import SignInForm from '../components/SignInForm'

const SignInLayout = () => {
  return (
    <div className='flex items-center bg-gray-800 p-3 rounded-md'>
        <Carousel/>
        <SignInForm/>
    </div>
  )
}

export default SignInLayout