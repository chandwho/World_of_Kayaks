import React from 'react'
import {HiOutlineShoppingBag} from 'react-icons/hi'

export default function ProductItems(props) {
  return (
    <div className='bg-slate-200 p-2 rounded-xl cursor-pointer max-w-[300px]'>
        <div className='h-[58%] flex justify-center items-center rounded-lg bg-white mb-2'>
            <img src={props.img} alt="" 
            className='max-w-[300px] w-[70%] h-[80%] object-contain rounded-lg'/>
        </div>
        <div className='flex flex-col items-center justify-evenly text-center text-xs h-[42%]'>
            <div className='text-sm lg:text-[10px] flex justify-between w-full'>
            <p>{props.product}</p>
            <p className='font-semibold text-green-700'>{props.price}</p> 
            </div>
            <h4 className='font-semibold text-sm lg:text-[10px]'>{props.name}</h4>
            <div className='flex items-center justify-between w-full'>
                <div className='flex gap-1 items-center'>
                    <p>Colors</p>
                    <div className='w-3 h-3 rounded-full bg-red-600'></div>
                    <div className='w-3 h-3 rounded-full bg-black'></div>
                    <div className='w-3 h-3 rounded-full bg-blue-700'></div>
                </div>
                
                <HiOutlineShoppingBag className='text-xl'/>
            </div>
            
        </div>
    </div>
  )
}

