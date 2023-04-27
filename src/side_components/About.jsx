import React from 'react'

export default function About() {
  return (
    <div className='flex p-5 gap-5 mb-10'>
        <div className='w-1/2'>
            <img src="https://images.unsplash.com/photo-1516471835429-167f83503f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" 
            alt="Man Kayaking" />
        </div>
        <div className='w-1/2 flex flex-col justify-center gap-3'>
            <h2 className='font-semibold text-xl'>Kayaking Is A Great Escape AnyTime</h2>
            <p className='text-[10px]'>People of all ages are looking to get outdoors and we have seen a 
                tremendous surge in demands of our products over the last several weeks as a result.
            </p>
            <button className='bg-black text-white rounded-3xl py-1 border-2 hover:bg-white hover:text-black border-black text-xs w-[100px]'>Learn Kayak</button>
        </div>
    </div>
  )
}
