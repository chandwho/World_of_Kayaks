import React from 'react'
import { RiSailboatLine, RiAccountCircleLine } from 'react-icons/ri'
import { SlCalender }  from 'react-icons/sl'

export default function Services() {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-10 p-10'>
        <div className='p-6 md:h-[280px] md:w-[240px] flex flex-col items-center justify-around text-center gap-3 shadow-xl rounded-lg'>
            <div className='flex justify-center items-center bg-lime-500 w-16 h-[62px] rounded-full p-3 shadow-gray-400 shadow-lg'>
                <RiSailboatLine className='text-3xl text-white'/>
            </div>
            <h3 className='text-md font-semibold'>Kayak Training</h3>
            <p className='text-[15px]'>Start your full year of kayak fitness training with leading experts in this industry.</p>
        </div>
        <div className='p-6 md:h-[280px] md:w-[240px] flex flex-col items-center justify-around text-center gap-3 shadow-xl rounded-lg'>
            <div className='flex justify-center items-center bg-green-600 w-16 h-[62px] rounded-full p-3 shadow-gray-400 shadow-lg'>
                <SlCalender className='text-3xl text-white'/>
            </div>
            <h3 className='text-md font-semibold'>Kayaking Events</h3>
            <p className='text-[15px]'>We have completed 1000+ kayaking events ranging from begineer level to advance.</p>
        </div>
        <div className='p-6 md:h-[280px] md:w-[240px] flex flex-col items-center justify-around text-center gap-3 shadow-xl rounded-lg'>
            <div className='flex justify-center items-center bg-teal-600 w-16 h-[62px] rounded-full p-3 shadow-gray-400 shadow-lg'>
                <RiAccountCircleLine className='text-3xl text-white'/>
            </div>
            <h3 className='text-md font-semibold'>Kayaking Packages</h3>
            <p className='text-[15px]'>We have variety of packages to choose from with different types of activities. </p>
        </div>
    </div>
  )
}
