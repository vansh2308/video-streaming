import React, { useState } from 'react'
import landingImg from "./../assets/landing-img.png"
import LoginForm from './LoginForm'
import { Outlet, Route, Routes } from 'react-router'
import RegisterForm from './RegisterForm'
import { useDispatch, useSelector } from "react-redux"
import { toggle } from "./../features/themeSlice"
import { useRef, useEffect } from 'react';


const Landing = () => {
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


  return (
    <div className='w-screen h-screen bg-wd dark:bg-bd relative overflow-hidden'>
      <div className='w-1/3 bg-pd dark:bg-p opacity-30 dark:blur-[150px] aspect-square absolute -bottom-10 -left-24 rounded-full blur-3xl' />
      <div className='w-1/2 bg-pd dark:bg-p opacity-20 dark:blur-[150px] aspect-square absolute -top-36 -right-40 rounded-full blur-3xl' />


      <div className='px-20 absolute top-1/2'>
        <h1 className='text-pd dark:text-p text-8xl tracking-wider font-black max-w-min'>VIDEO STREAMING</h1>
        <button className='relative mt-10 bg-pd dark:bg-p h-16 w-36 rounded-full p-2 z-40 flex' onClick={toggleTheme} ref={toggleButton}>
          <div className='h-full aspect-square rounded-full bg-wd dark:bg-bd'></div>
        </button>
      </div>

      <img src={landingImg} alt='land-img' className='max-h-full absolute left-14' />

      <div className='h-fit w-1/3 bg-w/40 dark:bg-b/40 backdrop-blur-3xl absolute right-36 top-1/2 -translate-y-1/2 rounded-lg  px-10'>
        <Outlet />
      </div>
      
    </div>
  )
}

export default Landing
