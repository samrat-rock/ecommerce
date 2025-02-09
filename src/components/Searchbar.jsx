"use client"

import Image from 'next/image'
import React from 'react'

function Searchbar() {
  return (
    <div>
      <form className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md">
        <input type='text' placeholder='Search Here....'/>
        <button className='cursor-pointer'>
            <Image src='/search.png' alt='' width={16} height={16}/>
        </button>

      </form>
    </div>
  )
}

export default Searchbar
