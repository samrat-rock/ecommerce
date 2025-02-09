import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

function Navbar() {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
       <div className='flex items-center justify-between h-full'>
         
      
       {/*mobile */}

       <Link href="/">
       LAMA
       <div className='text-2xl font-bold tracking-wide'>

       </div>
       </Link>
       <Menu/>
     
       </div>
    </div>
  )
}

export default Navbar
