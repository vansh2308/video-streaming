import React from 'react'
import { FaSearch } from "react-icons/fa"
import { IoAddCircle } from "react-icons/io5";
import { Outlet, useNavigate } from 'react-router';



const Dashboard = () => {
  
  return (
    <div className='w-full flex flex-col h-full'>

      <div className='w-4/6 mr-20 h-10 bg-wd flex rounded-md overflow-hidden text-sm dark:text-w dark:bg-bd flex-shrink-0'>
        <input type='text' className="bg-w/0 p-4 flex-1" name='search' placeholder='Search'></input>
        <FaSearch className='h-full aspect-square mx-4' />
      </div>

      <div className='flex py-10 h-full'>
        
        <div className='w-4/6 h-full overflow-scroll'>
          <Outlet />
        </div>

        <div className='flex w-2/6 h-full flex-col overflow-scroll ml-10 '>
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>

      </div>



    </div>
  )
}

export default Dashboard


const Thumbnail = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full flex-shrink-0 h-fit mb-8' onClick={()=>{ navigate("/:user/:vid")}}>
      <div className='bg-wd dark:bg-bd w-full h-48 rounded-lg ' />
      <div className='flex justify-between mt-3 px-2'>
        <div>
          <p className='font-bold' >Title</p>
          <p className='font-light text-xs'>Channel Name </p>

        </div>
        <button>
          <IoAddCircle className='text-2xl' />
        </button>
      </div>


    </div>
  )
}

