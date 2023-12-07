import React, { useEffect } from 'react'
import { IoTrashBin } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setWatchLater } from '../features/watchLaterSlice';
import { setUser } from '../features/userSlice';

const Profile = () => {
  const currentUser = useSelector(state => state.user.value)
  const watchLater = useSelector(state => state.watchLater.value)
  const dispatch = useDispatch()

 

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
        {
          watchLater.length > 0 && watchLater.map((item) => {
            return(
              <Thumbnail video={item} />
            )
          })
        }
      </div>

    </div>
  )
}

export default Profile



const Thumbnail = ({video}) => {
  const currentUser = useSelector(state => state.user.value)
  const watchLater = useSelector(state => state.watchLater.value)
  const dispatch = useDispatch()

  const removeFromWatchLater = async () => {
    let newUser = JSON.parse(JSON.stringify(currentUser))
    newUser.watchLater.pop(video._id)
    let updatedWatchLater = watchLater.filter((item) => {return(item._id != video._id)})


    await fetch("http://172.30.17.39:3500/user", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: currentUser.username,
        newUser: newUser
      })
    })
    dispatch(setUser(newUser))
    dispatch(setWatchLater(updatedWatchLater))

  }

  return (
    <div className='w-72 mr-4  flex-shrink-0 h-fit mb-8'>
      <div className='bg-wd dark:bg-bd w-full h-48 rounded-lg bgimg'
        // style={{
        //   background: `url(${video.videoInfo?.snippet?.thumbnails?.high?.url})` 
        // }}
      />
      <div className='flex justify-between mt-3 px-2'>
        <div className='w-5/6'>
          <p className='font-bold' >{video.videoInfo?.snippet?.title}</p>
          <p className='font-light text-xs mt-2'>{video.videoInfo?.snippet?.channelTitle}</p>
        </div>
        <button onClick={removeFromWatchLater}>
          <IoTrashBin  className='text-lg' />
        </button>
      </div>
    </div>
  )
}