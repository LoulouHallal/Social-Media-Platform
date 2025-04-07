import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='flex justify-between items-center h-24'>
      
      <div className=''/>
      <Link href="/" className='font-bold text-xl text-blue-600'>Social</Link>
      
      <div className='hidden md:flex'>
        <div className=''>
          <Link href="/" className='flex gap-2'>
          <Image src="/images/home.png" alt="home" width={17} height={17} className='cursor-pointer'/>
          </Link>
          <Link href="/" className='flex gap-2'>
          <Image src="/images/friends.png" alt="friends" width={17} height={17} className='cursor-pointer'/>
          </Link>
          <Link href="/" className='flex gap-2'>
          <Image src="/images/stories.png" alt="stories" width={17} height={17} className='cursor-pointer'/>
          </Link>
        </div>
      </div>
  
<div className=''>
      <MobileMenu/>
      </div>




    </div>
  )
}

export default Navbar