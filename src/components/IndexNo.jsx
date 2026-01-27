import React, { memo } from 'react'

function IndexNo({ activeIndex }) {
  return (
    <div className="flex
                     text-white font-bold 
                    rounded-full px-3 py-1.5 md:px-4 md:py-2 
                    shadow-lg 
                    text-5xl flex items-center justify-center
                    transition-all duration-300
                    hover:scale-110 active:scale-95" id='index' >
      {`0${activeIndex + 1}`}
    </div>
  )
}

export default memo(IndexNo)
