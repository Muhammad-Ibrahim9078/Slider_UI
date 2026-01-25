import React from 'react'

function IndexNo({ activeIndex }) {
  return (

    <div className="flex
                     text-white font-bold 
                    rounded-full px-4 py-2 
                    shadow-lg 
                    text-4xl flex items-center justify-center
                    transition-all duration-300
                    hover:scale-110" id='text'>
      {`${activeIndex + 1}`}

    </div>
  )
}

export default IndexNo
