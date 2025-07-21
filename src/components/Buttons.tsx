import React from 'react'

interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text, type = 'button', onClick }) => {
  return (
    <button type={type} onClick={onClick} className='bg-purple-500 text-white rounded p-3 w-full hover:bg-purple-600 transition-colors duration-300 mt-8'>
      {text}
    </button>
  )
}

export default Button