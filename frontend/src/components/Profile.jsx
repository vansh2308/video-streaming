import React from 'react'
import { IoTrashBin } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='w-full h-full ' >
      <div className='flex   w-3/5 mb-8'>
        <div className=' bg-wd h-20 aspect-square rounded-full border-2 border-pd mr-8' />
        <div className='flex flex-col'>
          <h3 className='font-semibold text-xl text-pd dark:text-p'> Vansh Agarwal </h3>
          <h4 className=' text-sm mb-4 '> @vansh2308 </h4>
          <p className='font-light text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, deserunt. Qui, eos voluptates. Similique nulla sunt qui temporibus eveniet dolorum facere accusamus, quis modi architecto neque incidunt, dignissimos quaerat beatae? </p>
        </div>
      </div>


      <p className='text-md my-4 font-semibold'>Watch Later</p>
      <div className='flex overflow-scroll'>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
      
      <div className='w-full flex justify-between items-center'>
        <p className='text-md my-4 font-semibold'>Your videos</p>
        <NavLink to="/:user/manage" className="mr-4 text-xs underline text-pd dark:text-p" >Manage</NavLink>

      </div>
      <div className='flex overflow-scroll'>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    </div>
  )
}

export default Profile



const Thumbnail = () => {
  return (
    <div className='w-72 mr-4  flex-shrink-0 h-fit mb-8'>
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