import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = () => {
  return (
    <>
    <div id='tasklist' className=' w-full  mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
        <AcceptTask/>

        <NewTask/>

        <CompletedTask/>

        <FailedTask/>
        

        
        
    </div>
    </>
  )
}

export default TaskList