import React from 'react'

function IndexNo({ activeIndex }) {
  return (
    <div className="absolute right-5 
                    bg-white text-black font-bold 
                    rounded-full px-4 py-2 
                    shadow-lg border border-gray-200
                    text-lg flex items-center justify-center
                    transition-all duration-300
                    hover:scale-110">
      {`Card: ${activeIndex + 1}`}
    </div>
  )
}

export default IndexNo
