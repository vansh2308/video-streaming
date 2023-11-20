import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { setUser } from '../features/userSlice'

const LoginForm = () => {
  const [error, setError] = useState(" ")
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const user = {
      username: data.get("username"),
      pwd: data.get("pwd")
    }

    const response = await fetch("http://localhost:3500/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    if(response.status === 401){
      const msg = await response.json();
      setError(msg.msg)
    }
    if(response.status === 200){ 
      const res = await response.json()
      dispatch(setUser(res.user))
      navigate(`/:${res.user.username}`) 
    }
    return response.status
  }
  

  
  return (
    <form className='flex flex-col h-full w-full text-pd dark:text-p py-16' onSubmit={handleSubmit}>
      <input required type='text' className='w-full bg-w p-3 rounded-md mb-4 dark:bg-b' name='username' placeholder='Username'></input>
      <input required type='password' className='w-full bg-w p-3 rounded-md mb-4 dark:bg-b' name='pwd' placeholder='Password'></input>


      <p className='text-red font-medium mb-4'>{error}</p>
      <div className='font-semibold'>
        {/* <Link to="/:user"> */}
          <button type='submit' className='px-8 py-3 rounded-md text-w dark:bg-p bg-pd mr-4'>Login</button>
        {/* </Link> */}
        <Link className='text-sm underline underline-offset-8' to="/register" > Not registered? </Link>

      </div>
    </form>

  )
}

export default LoginForm
