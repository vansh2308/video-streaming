import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { IoAddCircle } from "react-icons/io5";
import { Outlet, useNavigate } from 'react-router';
import { setVideoList } from '../features/videoListSlice';
import { useDispatch, useSelector } from 'react-redux';


const Dashboard = () => {
  const videoList = useSelector(state => state.videoList.value)
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()

  // useEffect(()=>{
  //   console.log(query)
  //   setQuery('')
  //   // let res = await fetch("http://localhost:3500/videos", {
  //   //   method: "GET",
  //   //   mode: "cors",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   body: JSON.stringify({
  //   //     "query": query
  //   //   })
  //   // })
  //   // res = await res.json()
  //   // dispatch(setVideoList(res))
  // }, [])


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    setQuery(data.get("search"))    
  }

  
  return (
    <div className='w-full flex flex-col h-full'>

      <form className='w-4/6 mr-20 h-10 bg-wd flex rounded-md overflow-hidden text-sm dark:text-w dark:bg-bd flex-shrink-0' onSubmit={handleSearchSubmit}>
        <input type='text' className="bg-w/0 p-4 flex-1" name='search' placeholder='Search'></input>
        <button type='submit'><FaSearch className='h-full aspect-square mx-4' /></button> 
      </form>

      <div className='flex py-10 h-full'>
        
        <div className='w-4/6 h-full overflow-scroll'>
          <Outlet />
        </div>

        <div className='flex w-2/6 h-full flex-col overflow-scroll ml-10 '>
          {
            videoList.map((video) => {
              console.log(video.videoInfo?.snippet?.title)
              return(
                <Thumbnail 
                  title={video.videoInfo?.snippet?.title}  
                  channelTitle={video.videoInfo?.snippet?.channelTitle}
                />
              )
            })
          }
        </div>

      </div>



    </div>
  )
}

export default Dashboard


const Thumbnail = ({title, channelTitle }) => {
  const navigate = useNavigate()
  return (
    <div className='w-full flex-shrink-0 h-fit mb-8' onClick={()=>{ navigate("/:user/:vid")}}>
      <div className='bg-wd dark:bg-bd w-full h-48 rounded-lg ' />
      <div className='flex justify-between mt-3 px-2 items-start'>
        <div className='w-5/6'>
          <p className='font-bold mb-2' >{title ? title : "Title"}</p>
          <p className='font-light text-xs'>{channelTitle ? channelTitle : "Channel Title"} </p>
        </div>
        <button>
          <IoAddCircle className='text-2xl' />
        </button>
      </div>
    </div>
  )
}

