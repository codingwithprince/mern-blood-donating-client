import React from 'react'
import Link from 'next/link'
import {FiSearch} from 'react-icons/fi'

const menu = [
  {
    name: 'home',
    link: '/'
  },
  {
    name: 'register',
    link: '/register'
  },
  {
    name: 'about',
    link: '/'
  }
]

export const Navbar = () => {
  return (
    <nav className='bg-red-500 sticky flex items-center justify-between top-0 text-white py-3 px-2 md:px-[20%]'>
      <div className="logo-area">
        <h2 className="font-bold text-2xl">Logo</h2>
      </div>
      <div className="search-box rounded-md bg-white flex items-center gap-0 px-2 w-[500px]">
        <FiSearch className='text-zinc-700' size={20} />
        <input type="search" name="search" id="search-box" 
        className='rounded-lg py-2 px-2 w-full focus:outline-none text-zinc-700'/>
      </div>
      <div className="menu">
        <ul className='flex gap-2 text-md font-semibold'>
          {
            menu.map((item, index)=> (
              <li className='border-b-2 
              border-transparent hover:border-white transition-all 
              duration-300 px-2'>
                <Link href={`/${item.link}`}>
                  <a className='capitalize'>{item.name}</a>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}
