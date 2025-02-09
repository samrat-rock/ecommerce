import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Searchbar from './Searchbar'
import Navbaricons from './Navbaricons'

function Navbar() {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
       <div className='flex items-center justify-between h-full md:hidden'>
         
      
       {/*mobile */}

       <Link href="/" >
       LAMA
       <div className='text-2xl font-bold tracking-wide'>

       </div>
       </Link>
       <Menu/>
     
       </div>

       {/* bigger screen*/}

     
       <div className='hidden md:flex items-center justify-between gap-8 h-full'>
        {/* left*/}   
        <div className='1/3'>
        <Link href="/" className='flex items-center gap-3'>
        <Image src="/logo.png" alt='logo' width={24} height={24}/>
       <div className='text-2xl tracking-wide'>LAMA</div>
       <div className='text-2xl font-bold tracking-wide'>

       </div>
       </Link>
        </div>

<div className='w-2/3 flex items-center justify-between gap-8'>
  <Searchbar/>
  <Navbaricons/>
</div>
        </div>
    
    </div>
  )
}

export default Navbar
