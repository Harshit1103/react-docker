import React from 'react'

const CreateTask = () => {
  return (
    <>
    <div className='mt-10  text-white border-cyan-700 border-2 shadow-lg inset-shadow-3xl rounded-md p-10 py-15 backdrop-blur-3xl'>
      <form className='flex items-start justify-between w-full flex-wrap'>
        
        
        <div className='w-1/2'>
        <div>
          <h3>Task Title</h3>
          <input type="text" className='bg-transparent py-1 px-2 w-4/5 mb-0.5 mt-0.5 border-cyan-700 border-2'/>
        </div>
        <div>
          <h3>Date</h3>
          <input type="date" className='bg-transparent py-1 px-2 w-4/5 mb-0.5 mt-0.5 border-cyan-700 border-2 '/>
        </div>
        <div>
          <h3>Assign to</h3>
          <input type="text" className='bg-transparent py-1 px-2 w-4/5 mb-0.5 mt-0.5 border-cyan-700 border-2'/>
        </div>
        <div>
          <h3>Category</h3>
          <input type="text" className='bg-transparent py-1 px-2 w-4/5 mb-0.5 mt-0.5 border-cyan-700 border-2'/>
        </div>
        </div>

        <div className='w-1/2'>
          <h3>Description</h3>
          <textarea name="" id="" className=' mb-0.5 mt-0.5bg-transparent w-full h-43 border-cyan-700 border-2 '></textarea>
          <button className=' bg-cyan-400 border-cyan-700 border-2 w-full py-2 p-1 cursor-pointer px-20 text-sm  rounded-sm mt-2'>Create Task</button>
        </div>

        
      </form>
    </div>
    </>
  )
}

export default CreateTask