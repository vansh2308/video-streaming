import React, { useEffect } from 'react'
import { IoTrashBin } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const currentUser = useSelector(state => state.user.value)

  return (
    <div className='w-full h-full overflow-scroll' >
      <div className='flex   w-3/5 mb-8'>
        <div className=' bg-wd dark:bg-bd h-20 aspect-square rounded-full border-2 border-pd mr-8' />
        <div className='flex flex-col'>
          <h3 className='font-semibold text-xl text-pd dark:text-p'> {currentUser.name} </h3>
          <h4 className=' text-sm mb-4 '> @{currentUser.username} </h4>
          <p className='font-light text-sm'>{currentUser.bio}</p>
        </div>
      </div>


      <p className='text-md my-4 font-semibold'>Watch Later</p>
      <div className='flex overflow-scroll'>
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



const Thumbnail = ({video}) => {

  return (
    <div className='w-72 mr-4  flex-shrink-0 h-fit mb-8'>
      <div className='bg-wd dark:bg-bd w-full h-48 rounded-lg ' />
      <div className='flex justify-between mt-3 px-2'>
        <div>
          <p className='font-bold' >Title</p>
          <p className='font-light text-xs'>Channel Title </p>
        </div>
        <button>
          <IoTrashBin  className='text-lg' />
        </button>
      </div>
    </div>
  )
}