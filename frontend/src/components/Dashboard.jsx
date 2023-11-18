import React from 'react'
import { FaSearch } from "react-icons/fa"
import Thumbnail from './Thumbnail'


const Dashboard = () => {
  return (
    <div className='w-full flex flex-col h-full'>

      <div className='w-4/6 mr-20 h-10 bg-wd flex rounded-md overflow-hidden text-sm dark:text-w dark:bg-bd flex-shrink-0'>
        <input type='text' className="bg-w/0 p-4 flex-1" name='search' placeholder='Search'></input>
        <FaSearch className='h-full aspect-square mx-4' />
      </div>

      <div className='flex py-10 h-full'>

        <DefaultViewer />

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


function DefaultViewer(props) {
  return (
    <div className='w-4/6 h-fit'>
      <div className='w-full h-[20rem] rounded-xl tagline-wrapper relative overflow-hidden '>
        <div className="absolute mask h-full w-full " />
        <div className='absolute text-w bottom-8 left-8'>
          <h2 className=' font-extrabold text-5xl tracking-wider mb-4' >UNPAUSED</h2>
          <h4 className=' font-normal text-xl w-3/4'>Jaw dropping videos on your way, uninterrupted </h4>
        </div>
      </div>

      <div className='w-5/6 leading-relaxed font-light mt-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  )
}