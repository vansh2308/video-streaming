
import { FaEye } from "react-icons/fa";
import { BiSolidComment } from "react-icons/bi"
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentVideo  } from "../features/currentVideoSlice";
import { setVideoList } from "../features/videoListSlice";
import { setUser } from "../features/userSlice";

export default function VideoViewer(props) {
  const currentVideo = useSelector(state => state.currentVideo.value)
  const title = currentVideo.videoInfo?.snippet?.title
  const channelTitle = currentVideo.videoInfo?.snippet?.channelTitle
  const publishDate = currentVideo.videoInfo?.snippet?.publishedAt
  const stats = currentVideo.videoInfo?.statistics
  const desc = currentVideo.videoInfo?.snippet?.description
  const dispatch = useDispatch()
  const currUser = useSelector(state => state.user.value)

  
  const handleLike = async (e) => {
    e.preventDefault()
    if(currUser.likedVideos.includes(currentVideo.videoInfo?.id)) return
    
    let newVideo = JSON.parse(JSON.stringify(currentVideo))
    let newUser = JSON.parse(JSON.stringify(currUser))
    newVideo.videoInfo.statistics.likeCount += 1;
    newUser.likedVideos.push(currentVideo.videoInfo?.id)
    if(currUser.dislikedVideos.includes(currentVideo.videoInfo?.id)) {
      newVideo.videoInfo.statistics.dislikeCount -= 1; 
      newUser.dislikedVideos.pop(currentVideo.videoInfo?.id)
    }


    await fetch("http://172.31.26.175:3500/videos/updateVideo", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: currentVideo.videoInfo?.id,
        newVideo: newVideo
      })
    })
    const newVideolist = await fetch("http://172.31.26.175:3500/videos", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: ""
      })
    })
    
    await fetch("http://172.31.26.175:3500/user", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: currUser.username,
        newUser: newUser
      })
    })


    dispatch(setVideoList(await newVideolist.json()))
    dispatch(setCurrentVideo(newVideo))
    dispatch(setUser(newUser))
  }
  
  
  const handleDislike = async (e) => {
    e.preventDefault()
    if(currUser.dislikedVideos.includes(currentVideo.videoInfo?.id)) return

    let newVideo = JSON.parse(JSON.stringify(currentVideo))
    let newUser = JSON.parse(JSON.stringify(currUser))
    newVideo.videoInfo.statistics.dislikeCount += 1;
    newUser.dislikedVideos.push(currentVideo.videoInfo?.id)
    if(currUser.likedVideos.includes(currentVideo.videoInfo?.id)) {
      newVideo.videoInfo.statistics.likeCount -= 1; 
      newUser.likedVideos.pop(currentVideo.videoInfo?.id)
    }

    await fetch("http://172.31.26.175:3500/videos/updateVideo", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: currentVideo.videoInfo?.id,
        newVideo: newVideo
      })
    })
    const newVideolist = await fetch("http://172.31.26.175:3500/videos", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: ""
      })
    })

    await fetch("http://172.31.26.175:3500/user", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: currUser.username,
        newUser: newUser
      })
    })
    

    dispatch(setVideoList(await newVideolist.json()))
    dispatch(setCurrentVideo(newVideo))
    dispatch(setUser(newUser))

    
  }


  


  return (
    <div>
      <div className='w-full h-[20rem] rounded-xl bg-wd dark:bg-bd relative overflow-hidden '
        style={{
          background: `url(${currentVideo.videoInfo?.snippet?.thumbnails?.high?.url})` 
        }}
      > </div>

      <div className='w-full  leading-relaxed font-light mt-10'>
        <h2 className='font-bold text-2xl mb-4'>{title}</h2>

        <div className='flex justify-between'>
          <div>
            <h3 className='text-md font-semibold my-1'>{channelTitle}</h3>
            <h5 className='text-xs '>Published on: {publishDate}</h5>
            <div className='flex items-center text-xs font-semibold my-4'>
              <FaEye className='mr-3 text-lg' />
              {stats?.viewCount} views
              <BiSolidComment className='ml-7 mr-3 text-lg' />
              {stats?.commentCount} comments
            </div>
          </div>

          <div className='w-1/4 h-14 flex rounded-full bg-pd/40 dark:bg-p/40 relative overflow-hidden border-2 border-pd dark:border-p'>
            <button className='w-1/2 h-full border-r-2 border-pd flex justify-center items-center' onClick={handleLike}>
              <AiFillLike className='text-2xl mr-2' />
              <span className='font-bold text-sm'>{stats?.likeCount}</span>
            </button>
            <button className='w-1/2 h-full flex justify-center items-center' onClick={handleDislike}>
              <AiFillDislike className='text-2xl mr-2' />
              <span className='font-bold text-sm'>{stats?.dislikeCount}</span>
            </button>
          </div>
        </div>

        <div className='text-md my-8 font-light'>
          {desc}
        </div>
      </div>
    </div>
  )
}
