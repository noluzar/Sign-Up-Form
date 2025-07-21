import React from 'react'

interface SecondaryButtonProps {
  text?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  children?: React.ReactNode
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, type = 'button', onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick} className='border border-gray-500 w-full flex items-center justify-center rounded gap-4 p-3 cursor-pointer'>
      {children ? children : text}
    </button>
  )
}

export default SecondaryButton