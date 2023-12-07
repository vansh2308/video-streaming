import React, { useEffect } from 'react'
import { IoTrashBin } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../features/userSlice';
import { useState } from 'react';
import { setUploadedVideos } from '../features/uploadedVideosSlice';


const Manage = () => {
  const user = useSelector(state => state.user.value) 
  const uploadedVideos = useSelector(state => state.uploadedVideos.value)

  
  return (
    <div>
      <div className='flex h-screen'>

        <UploadWrapper />

        <div className='flex w-2/6 pb-10 flex-col overflow-scroll ml-10  '>
          <p className='font-medium text-lg mb-4' >Your Videos</p>
          {
            uploadedVideos.map((item) => {
              return(
                <Thumbnail video={item} id={item._id} />
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Manage




function UploadWrapper(props) {
  const user = useSelector(state => state.user.value)
  const uploadedVideos = useSelector(state => state.uploadedVideos.value)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data  = new FormData(e.target)
    const newVideo = {
      videoInfo: {
        snippet: {
          title: data.get("title"),
          description: data.get("desc"),
          tags: data.get("tags").split(" "),
          channelID: user.username,
          channelTitle: user.name
        }
      }
    }

    let res = await fetch("http://172.30.17.39:3500/videos/uploadVideo", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "newVideo": newVideo
      })
    })
    res = await res.json()
    
    const newUser = JSON.parse(JSON.stringify(user))
    newUser.createdVideos.push(res.newVid._id)
    dispatch(setUser(newUser))

    const updatedUploadedVideos = [...uploadedVideos, newVideo]
    dispatch(setUploadedVideos(updatedUploadedVideos))
    await fetch("http://172.30.17.39:3500/user", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        newUser: newUser
      })
    })
  }

  return (
    <form className='w-4/6 h-full overflow-scroll pb-16' onSubmit={handleSubmit}>
      <p className='font-bold text-lg mb-4' >Create Videos</p>
      <div className='w-full h-[20rem] mb-8 rounded-xl bg-wd dark:bg-bd relative overflow-hidden flex items-center justify-center'>
        <button className='py-3 px-6 border-2 border-pd dark:border-p rounded-xl text-pd dark:text-p font-semibold'>
          Upload Video
        </button>
      </div>

      <input type='text' placeholder='Title' name='title' className='py-4 px-8 bg-wd dark:bg-bd rounded-md w-full mb-4' /> 
      <input type='text' placeholder='Description' name='desc' className='py-4 px-8 bg-wd dark:bg-bd rounded-md w-full mb-4' /> 
      <input type='text' placeholder='Tags' name='tags' className='py-4 px-8 bg-wd dark:bg-bd rounded-md w-full mb-4' /> 

      <button type='submit' className='my-8 bg-pd dark:bg-p text-w py-3 px-6 rounded-xl font-bold'>Submit</button>
    </form>
  )
}



const Thumbnail = ({video, id}) => {
  const uploadedVideos = useSelector(state => state.uploadedVideos.value)  
  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()


  const deleteFromUploads = async (e) => {
    e.preventDefault()
    let newUser = JSON.parse(JSON.stringify(user))

  }


  return (
    <div className='w-full mr-4  flex-shrink-0 h-fit mb-8'>

      <div className='bg-wd dark:bg-bd w-full h-48 rounded-lg ' />
      <div className='flex justify-between mt-3 px-2'>
        <div>
          <p className='font-bold' >{video.videoInfo.snippet.title}</p>
          <p className='font-light text-xs'>{video.videoInfo.snippet.channelTitle}</p>
          <p className='font-light text-xs'>{video.videoInfo.snippet.description}</p>
        </div>
        {/* <button>
          <IoTrashBin className='text-lg' onClick={deleteFromUploads} />
        </button> */}
      </div>
    </div>
  )
}