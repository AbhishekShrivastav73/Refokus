import React from 'react'

function Work() {

    let images = [
        {url : 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png', top : '39%', left : '40%', isActive : false},
        {url : 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png', top : '42%', left : '37%', isActive : false},
        {url : 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png', top : '35%', left : '43%', isActive : false},
        {url : 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png', top : '46%', left : '40%', isActive : false},
        {url : 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png', top : '49%', left : '36%', isActive : false},
        {url : 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png', top : '40%', left : '40%', isActive : false},
    ]


  return (
    <div className='w-full'>
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[32vw] leading-none  font-semibold'>Work</h1>
            <h6>Web Design, Webflow Development, Creative Development.</h6>
            <div className='w-full h-full  absolute top-0'>
                {images.map((elem,index)=>
                   elem.isActive && ( <img className='w-64 rounded-md absolute' style={{top: elem.top, left: elem.left}} src={elem.url}/>)
                )
                }
            </div>
        </div>
    </div>
  )
}

export default Work