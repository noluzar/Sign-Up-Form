// import React from 'react'
import Carousel from '../components/Carousel'
import SignUpForm from '../components/SignUpForm'

const SignUpLayout = () => {
  return (
    <div className='flex justify-center items-center bg-gray-800 p-3 rounded-md'>
        <Carousel/>
        <SignUpForm/> 
    </div>
  )
}

export default SignUpLayout