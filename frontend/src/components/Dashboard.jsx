import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { IoAddCircle } from "react-icons/io5";
import { Outlet, useNavigate } from 'react-router';
import { setVideoList } from '../features/videoListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentVideo } from '../features/currentVideoSlice';
import { setUser } from '../features/userSlice';
import { setWatchLater } from '../features/watchLaterSlice';


const Dashboard = () => {
  const dispatch = useDispatch()
  const videoList = useSelector(state => state.videoList.value)
  const [searchKey, setSearchKey] = useState("")

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const query = new FormData(e.target)
    setSearchKey(query.get("search"))

    let res = await fetch("http://172.31.26.175:3500/videos", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "query": query.get("search")
      })
    })

    res = await res.json();
    dispatch(setVideoList(res))
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
            videoList.map((video, key) => {
              return (
                <Thumbnail
                  video={video}
                  key={video._id}
                  searchKey={searchKey}
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


const Thumbnail = ({ video, key, searchKey }) => {
  const dispatch = useDispatch()
  const title = video.videoInfo?.snippet?.title
  const channelTitle = video.videoInfo?.snippet?.channelTitle
  const videoID = video.videoInfo?.id

  const user = useSelector(state => state.user.value)
  const navigate = useNavigate()

  const handleViewVideo = async (e) => {
    e.preventDefault()
    let newVideo = JSON.parse(JSON.stringify(video))
    newVideo.videoInfo.statistics.viewCount += 1;
    await fetch("http://172.31.26.175:3500/videos/updateVideo", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: videoID,
        newVideo: newVideo
      })
    })

    await fetch("http://172.31.26.175:3500/videos/logClick", {
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify({
        username: user.username,
        id: newVideo.videoInfo.id
      })
    })

    const newVideolist = await fetch("http://172.31.26.175:3500/videos", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: searchKey
      })
    })
    dispatch(setVideoList(await newVideolist.json()))
    dispatch(setCurrentVideo(newVideo))
    navigate(`/${user.username}/${videoID}`)
  }


  const addToWatchLater = async (e) => {
    e.preventDefault()
    let newUser = JSON.parse(JSON.stringify(user));
    if(newUser.watchLater.indexOf(video._id) > -1) return 
    newUser.watchLater.push(video._id)

    await fetch("http://172.31.26.175:3500/user", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        newUser: newUser
      })
    })

    dispatch(setUser(newUser))

    const updatedWatchLater = await fetch("http://172.31.26.175:3500/videos/ids", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ids: newUser.watchLater
      })
    })

    const reswatchl = await updatedWatchLater.json()

    console.log(reswatchl)

    dispatch(setWatchLater(reswatchl))

  }

  


  return (
    <div className='w-full flex-shrink-0 h-fit mb-8' >
      <div className="bg-wd dark:bg-bd w-full h-48 rounded-lg bgimg" onClick={handleViewVideo} 
        style={{
          background: `url(${video.videoInfo?.snippet?.thumbnails?.high?.url})` 
        }}
      />
      <div className='flex justify-between mt-3 px-2 items-start'>
        <div className='w-5/6'>
          <p className='font-bold mb-2' >{title ? title : "Title"}</p>
          <p className='font-light text-xs'>{channelTitle ? channelTitle : "Channel Title"} </p>
        </div>
        <button>
          <IoAddCircle className='text-2xl' onClick={addToWatchLater} />
        </button>
      </div>
    </div>
  )
}

