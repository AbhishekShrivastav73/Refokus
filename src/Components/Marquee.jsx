import React from 'react'

function Marquee({imgsUrl}) {
  
  return (
    <div className='flex items-center gap-20 w-full overflow-hidden'>
        {imgsUrl.map(elem=> <img className='w-24 py-4 h-18 flex-shrink-0' src={elem} alt=''/> )}
        {imgsUrl.map(elem=> <img className='w-24 py-4 h-18' src={elem} alt=''/> )}
 
    </div>
  )
}

export default Marquee