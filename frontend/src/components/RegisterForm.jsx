import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const RegisterForm = () => {
  const [error, setError]=useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const newUser = {
      username: data.get("username"),
      name: data.get("name"),
      pwd: data.get("pwd"),
      bio: data.get("bio") ? data.get("bio") : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, deserunt. Qui, eos voluptates. Similique nulla sunt qui temporibus eveniet dolorum facere accusamus, quis modi architecto neque incidunt, dignissimos quaerat beatae?"
    }
    const response = await fetch("http://172.31.26.175:3500/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser)
    });
    
    if(response.status === 409) {setError("Username already exists!")}
    if(response.status === 201) {navigate("/")}
    return response.status
  }

  return (
    <form className='flex flex-col h-full w-full text-pd py-16 dark:text-p' onSubmit={handleSubmit}>
      <input required type='text' className='w-full bg-w p-3 rounded-md mb-4 dark:bg-b' name='name' placeholder='Full Name'></input>
      <input required type='text' className='w-full bg-w p-3 rounded-md mb-4 dark:bg-b' name='username' placeholder='Username'></input>
      <input type='text' className='w-full bg-w p-3 rounded-md mb-4 dark:bg-b' name='bio' placeholder='bio'></input>
      <input required type='password' className='w-full bg-w p-3 rounded-md mb-4 dark:bg-b' name='pwd' placeholder='Password'></input>

      <p className='text-red font-bold mb-4'>{error}</p>
      <div className='font-semibold'>
        <button type='submit' className='px-8 py-3 rounded-md text-w bg-pd mr-4 dark:bg-p'>Register</button>
        <Link className='text-sm underline underline-offset-8' to="/" > Already registered? </Link>

      </div>
    </form>
  )
}

export default RegisterForm
