import { useState, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const images = [
  '/saand.webp',
  '/san.webp',
  '/sand.jpg'
]

const Carousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[600px] h-[90vh] flex items-center justify-center bg-gray-200 rounded-md overflow-hidden">
        <div className="absolute inset-0 bg-black/40 bg-opacity-40 z-10" />
        <img
          src={images[current]}
          alt={`slide-${current}`}
          className="object-fill w-full h-full"
        />
        <Link
          to="/"
          className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-gray-500 hover:bg-gray-600 px-4 font-semibold text-md py-1 rounded-full shadow hover: transition"
        >
          <FaArrowLeft />
          Back to website
        </Link>
        <div className="absolute bottom-0 py-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <h2 className="text-2xl md:text-2xl font-bold text-white text-center drop-shadow-lg">
            CAPTURING MOMENTS, <br /> CREATING MEMORIES
          </h2>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-12 h-3 rounded-full transition-colors duration-200 ${
                idx === current ? 'bg-purple-500' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel