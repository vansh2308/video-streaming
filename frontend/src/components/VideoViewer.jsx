
import { FaEye } from "react-icons/fa";
import { BiSolidComment } from "react-icons/bi"
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

export default function VideoViewer(props) {
  return (
    <div>
      <div className='w-full h-[20rem] rounded-xl bg-wd dark:bg-bd relative overflow-hidden '> </div>

      <div className='w-full  leading-relaxed font-light mt-10'>
        <h2 className='font-bold text-2xl mb-4'>Title of video</h2>

        <div className='flex justify-between'>
          <div>
            <h3 className='text-md font-semibold my-1'>Uploaded by</h3>
            <h5 className='text-xs '>Publised on:</h5>
            <div className='flex items-center text-xs font-semibold my-4'>
              <FaEye className='mr-3 text-lg' />
              230 views
              <BiSolidComment className='ml-7 mr-3 text-lg' />
              14 comments
            </div>
          </div>

          <div className='w-1/4 h-14 flex rounded-full bg-pd/40 dark:bg-p/40 relative overflow-hidden border-2 border-pd dark:border-p'>
            <button className='w-1/2 h-full border-r-2 border-pd flex justify-center items-center'>
              <AiFillLike className='text-2xl mr-2' />
              <span className='font-bold text-sm'>84</span>
            </button>
            <button className='w-1/2 h-full flex justify-center items-center'>
              <AiFillDislike className='text-2xl mr-2' />
              <span className='font-bold text-sm'>10</span>
            </button>
            
            

          </div>
        </div>

        <div className='text-md my-8 font-light'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae sapiente non sequi consequuntur blanditiis, quidem officiis deserunt autem ipsa? Velit expedita modi natus praesentium eum labore totam doloremque rerum quidem.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae sapiente non sequi consequuntur blanditiis, quidem officiis deserunt autem ipsa? Velit expedita modi natus praesentium eum labore totam doloremque rerum quidem.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae sapiente non sequi consequuntur blanditiis
        </div>
      </div>
    </div>
  )
}
