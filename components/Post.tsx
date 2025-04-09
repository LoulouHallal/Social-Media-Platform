import Image from 'next/image'
import React from 'react'

function Post() {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
        <div className=' flex items-center gap-4'>
            <Image src={"https://images.pexels.com/photos/29778689/pexels-photo-29778689/free-photo-of-solitary-figure-in-vysoke-tatry-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Profile" width={40} height={40} className='w-12 h-12 rounded-full ring-2'/>
            <span className='font-medium'>Ali</span>
            
            </div>    
            <Image src="/more.png" alt="" width={16} height={16}/>
            </div>
        <div className='flex flex-col gap-4'>
            <div className='w-full min-h-96 relative'>
            <Image src="https://images.pexels.com/photos/31325374/pexels-photo-31325374/free-photo-of-open-vintage-book-on-rustic-wooden-floor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""  fill className='object-cover rounded-md'/>
            </div>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>

        </div>
        <div className='flex items-center justify-between text-sm'>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                    <Image src="/like.png" alt="" width={16} height={16} className='cursor-pointer'/>
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>123<span className='hidden md:inline'>Likes</span></span>
                </div>
            </div>
               <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                    <Image src="/comment.png" alt="" width={16} height={16} className='cursor-pointer'/>
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>123<span className='hidden md:inline'>comment</span></span>
                </div>
              </div>
              <div className='flex gap-8'>
                 <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                      <Image src="/share.png" alt="" width={16} height={16} className='cursor-pointer'/>
                      <span className='text-gray-300'>|</span>
                      <span className='text-gray-500'>123<span className='hidden md:inline'>share</span></span>
                 </div>
                 </div>
              
            </div> 
                              
        </div>
  )
}

export default Post