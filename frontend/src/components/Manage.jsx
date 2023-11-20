import React from 'react'
import { IoTrashBin } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const Manage = () => {
  return (
    <div>
      <div className='flex h-screen'>

        <UploadWrapper />

        <div className='flex w-2/6 pb-10 flex-col overflow-scroll ml-10  '>
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
    <div className='w-4/6 h-full overflow-scroll pb-16'>
      <p className='font-bold text-lg mb-4' >Create Videos</p>
      <div className='w-full h-[20rem] mb-8 rounded-xl bg-wd dark:bg-bd relative overflow-hidden flex items-center justify-center'>
        <button className='py-3 px-6 border-2 border-pd dark:border-p rounded-xl text-pd dark:text-p font-semibold'>
          Upload Video
        </button>
      </div>

      <input type='text' placeholder='Title' name='title' className='py-4 px-8 bg-wd dark:bg-bd rounded-md w-full mb-4' /> 
      <input type='text' placeholder='Description' name='desc' className='py-4 px-8 bg-wd dark:bg-bd rounded-md w-full mb-4' /> 
      <input type='text' placeholder='Tags' name='tags' className='py-4 px-8 bg-wd dark:bg-bd rounded-md w-full mb-4' /> 

      <button type='submit' className='my-8 bg-pd dark:bg-p py-3 px-6 rounded-xl font-bold'>Submit</button>
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
          <IoTrashBin className='text-lg' />
        </button>
      </div>
    </div>
  )
}