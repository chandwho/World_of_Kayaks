import React from 'react'

export default function LocationItem(props) {
  return (
    <div className='flex flex-col gap-2 items-center text-center w-[180px]'>
        <p className='text-xs'>{props.place}</p>
        <img src={props.img} alt="Kayaking" 
        className='w-16 h-[60px] rounded-full'/>
    </div>
  )
}
