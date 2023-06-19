import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex gap-5 flex-wrap justify-evenly'>
    {Array(100).fill("").map((e)=><div className=' h-72 w-72 bg-slate-400 mt-5 gap-5'></div>) }
  
    </div>  )

   
}

export default Shimmer;