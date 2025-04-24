import React from 'react'

const CompletedTask = () => {
  return (
    <>
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5 '>
            <div className='flex justify-between items-center'> 
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>high</h3>
                <h4>23 feb 2025</h4>
            </div>
            <h2 className='text-2xl mt-5 font-semibold'>Make a website</h2>
            <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore dignissimos molestias illum laboriosam id laudantium.</p>
            <div className='mt-2'>
                <button className='w-full bg-green-600'>Completed</button>
            </div>
        </div>
    </>
  )
}

export default CompletedTask