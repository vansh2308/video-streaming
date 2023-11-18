import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div className='flex flex-col h-full w-full text-pd dark:text-p py-16'>
      <input type='text' className='w-full bg-w p-3 rounded-md mb-4 dark:bg-b' name='user' placeholder='Username'></input>
      <input type='password' className='w-full bg-w p-3 rounded-md mb-4 dark:bg-b' name='pwd' placeholder='Password'></input>


      <p className='text-red font-bold mb-4'> </p>
      <div className='font-semibold'>
        <Link to="/:user">
          <button type='submit' className='px-8 py-3 rounded-md text-w dark:bg-p bg-pd mr-4'>Login</button>
        </Link>
        <Link className='text-sm underline underline-offset-8' to="/register" > Not registered? </Link>

      </div>
    </div>

  )
}

export default LoginForm
