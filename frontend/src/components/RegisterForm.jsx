import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <div className='flex flex-col h-full w-full text-pd py-16 dark:text-p'>
        <input type='text' className='w-full bg-w p-3 rounded-md mb-4 dark:bg-b' name='name' placeholder='Full Name'></input>
        <input type='text' className='w-full bg-w p-3 rounded-md mb-4 dark:bg-b' name='user' placeholder='Username'></input>
        <input type='text' className='w-full bg-w p-3 rounded-md mb-4 dark:bg-b' name='bio' placeholder='bio'></input>
        <input type='password' className='w-full bg-w p-3 rounded-md mb-4 dark:bg-b' name='pwd' placeholder='Password'></input>



        <p className='text-red font-bold mb-4'> </p>
        <div className='font-semibold'>
          <Link to="/">
            <button type='submit' className='px-8 py-3 rounded-md text-w bg-pd mr-4 dark:bg-p'>Register</button>
          </Link>
          <Link className='text-sm underline underline-offset-8' to="/" > Already registered? </Link>

        </div>
      </div>
  )
}

export default RegisterForm
