import React, { useEffect } from 'react'
import { NavLink} from 'react-router-dom'
import { BiSolidDashboard } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { useState } from 'react';
import { Outlet } from 'react-router';
import { useDispatch, useSelector } from "react-redux"
import { toggle } from "./../features/themeSlice"
import { useRef } from 'react';
import { setUser } from '../features/userSlice';
import { setWatchLater } from '../features/watchLaterSlice'; 



const User = () => {

  // theme functionality 
  const theme = useSelector(state => state.theme.value)
  const dispatch = useDispatch()
  const toggleButton = useRef(null)

  useEffect(() => {
    toggleButton.current.style.justifyContent = theme === "light" ? "flex-start" : "flex-end";
  }, [theme])
  const toggleTheme = (e) => {
    if(theme == "light"){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    dispatch(toggle())
  }


  const user = useSelector(state => state.user.value)

  const handleLogout = async (e) => {
    dispatch(setUser({}))
    dispatch(setWatchLater([]))

    await fetch("http://172.30.17.39:3500/logout", {
      method: "POST",
      mode: "cors",
      headers: {  "Content-Type": "application/json", },
      body: JSON.stringify({
        username: user.username
      })
    })
  }

  return (
    <div className='w-screen h-screen flex relative overflow-hidden bg-w dark:bg-b'>
      <div className='h-1/3 bg-pd dark:bg-p aspect-square absolute -bottom-16 -left-32 rounded-full' />
      <div className='h-1/2 bg-pd dark:bg-p aspect-square absolute top-8 left-40 rounded-full' />

      {/* side navbar  */}
      <div className='w-1/5 h-full bg-w/50 dark:bg-b/50 backdrop-blur-[150px] py-12 px-10 dark:text-w'>
        
        <div className='flex items-center mb-20'>
          <div className='aspect-square w-10 bg-wd dark:bg-bd rounded-full border border-pd dark:border-p mr-4' />

          <div className='text-md '>
            <span className='text-pd dark:text-p font-bold'> Welcome </span>
            <p className='text-sm'>{user.username}</p>
          </div>
        </div>


        <nav className='text-sm '>
          <NavLink to="/:user/" className={({ isActive })=>(isActive ? "flex items-center mb-7 font-semibold text-pd dark:text-p" : "flex items-center mb-7")}>
            <BiSolidDashboard className='mr-4 text-xl' />
            Dashboard
          </NavLink>
          <NavLink to="/:user/profile" className={({ isActive })=>(isActive ? "flex items-center mb-7 font-semibold text-pd dark:text-p" : "flex items-center mb-7")} >
            <IoPerson className='mr-4 text-xl' />
            Profile
          </NavLink>
          <NavLink to="/:user/manage" className={({ isActive })=>(isActive ? "flex items-center mb-7 font-semibold text-pd dark:text-p" : "flex items-center mb-7")} >
            <MdEdit className='mr-4 text-xl' />
            Manage Videos
          </NavLink>
          <NavLink to="/"  onClick={handleLogout} className={({ isActive })=>(isActive ? "flex items-center mb-7 font-semibold text-pd dark:text-p" : "flex items-center mb-7")} >
            <IoLogOut className='mr-4 text-xl' />
            Logout
          </NavLink>
        </nav>


        <button className='absolute mt-10 bg-pd dark:bg-p h-8 w-16 rounded-full p-1 z-40 flex bottom-16' ref={toggleButton} onClick={toggleTheme}>
          <div className='h-full aspect-square rounded-full bg-wd dark:bg-bd' ></div>
        </button>
      </div>



      <div className='w-4/5 h-screen bg-w dark:bg-b relative text-b dark:text-w pt-12 px-16'>
          <Outlet />
      </div>



    </div>
  )
}

export default User
