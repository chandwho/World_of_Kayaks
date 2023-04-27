import React from 'react'
import ProductItems from './ProductItems'

export default function Products() {
  return (
    <div className='p-3 mb-10 flex flex-col items-center'>
        <nav className='flex justify-between items-center mb-5 gap-5 w-full'>
            <div className='md:w-1/4'>
                <h3 className='font-semibold text-2xl'>Our Best Products</h3>
            </div>
            <div className='md:w-3/4 flex flex-col sm:flex-row justify-evenly items-center'>
                <a className='hover:bg-black hover:text-white rounded-3xl py-1 px-2 text-xs cursor-pointer'>All Products</a>
                <a className='hover:bg-black hover:text-white rounded-3xl py-1 px-2 text-xs cursor-pointer'>Paddle Board</a>
                <a className='hover:bg-black hover:text-white rounded-3xl py-1 px-2 text-xs cursor-pointer'>Gear</a>
                <a className='hover:bg-black hover:text-white rounded-3xl py-1 px-2 text-xs cursor-pointer'>Clothes</a>
            </div>
        </nav>    
        <div className='grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-3'>
            <ProductItems
                img='https://m.media-amazon.com/images/I/61+rstpeyUL._SL1200_.jpg'
                product='Paddle Board'
                name="10'6 Komodo Inflatable Paddle Board "
                price='$399.00'
            />
            <ProductItems
                img='https://m.media-amazon.com/images/I/513GSF5BvGL._AC_UL320_.jpg'
                product='Paddle Bag'
                name='Inflatable Paddle Board Backpack'
                price='$220.00'
            />
            <ProductItems
                img='https://m.media-amazon.com/images/I/71pxMhgw+dS._AC_UL320_.jpg'
                product='Cap'
                name='Inflatable Board Cap'
                price='$70'
            />
        </div>            
    </div>
  )
}
