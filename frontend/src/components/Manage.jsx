import React from 'react'
import { IoTrashBin } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const Manage = () => {
  return (
    <div>
      <div className='flex h-full'>

        <UploadWrapper />

        <div className='flex w-2/6 h-full flex-col overflow-scroll ml-10 '>
        <p className='font-medium text-lg mb-4' >Your Videos</p>
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

export default Manage




function UploadWrapper(props) {
  return (
    <div className='w-4/6 h-fit'>
      <p className='font-bold text-lg mb-4' >Create Videos</p>
      <div className='w-full h-[20rem] rounded-xl bg-wd dark:bg-bd relative overflow-hidden flex items-center justify-center'>
        <button className='py-3 px-6 border-2 border-pd dark:border-p rounded-xl text-pd dark:text-p font-semibold'> 
          Upload Video
        </button>
        
        
      </div>

      <div className='w-5/6 leading-relaxed font-light mt-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  )
}



const Thumbnail = () => {
  return (
    <div className='w-full mr-4  flex-shrink-0 h-fit mb-8'>

      <div className='bg-wd dark:bg-bd w-full h-48 rounded-lg ' />
      <div className='flex justify-between mt-3 px-2'>
        <div>
          <p className='font-bold' >Title</p>
          <p className='font-light text-xs'>Channel Name </p>
        </div>
        <button>
          <IoTrashBin  className='text-lg' />
        </button>
      </div>
    </div>
  )
}