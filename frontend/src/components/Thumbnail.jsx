import React from 'react'

const Thumbnail = () => {
  return (
    <div className='w-full flex-shrink-0 h-fit mb-8'>
      <div className='bg-bd w-full h-48 rounded-lg ' />
      <div className='flex justify-between mt-3 px-2'>
        <div>
          <p className='font-bold' >Title</p>
          <p className='font-light text-xs'>Channel Name </p>
        </div>
        <button>
          <IoAddCircle className='text-2xl' />
        </button>
      </div>




    </div>
  )
}

export default Thumbnail
