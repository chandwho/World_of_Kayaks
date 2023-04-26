// import React from 'react'
import '../App.css'

export default function NavBar() {
  return (
    <div className='flex flex-col items-center md:flex-row gap-5 w-full justify-between py-5 px-12 shadow-lg'>

        <h1 className='cursor-pointer text-xl md:text-3xl nav-header'>KAYAK</h1>
        <div className='flex flex-col items-center md:flex-row md:gap-5'>
            <a href="">Home</a>
            <a href="">Training</a>
            <a href="">Trip</a>
            <a href="">Location</a>
            <a href="">Support</a>
        </div>
        <button className='bg-black text-white rounded-3xl px-5 py-2 border-2 hover:bg-white hover:text-black border-black'>Contact</button>
    </div>
  )
}
