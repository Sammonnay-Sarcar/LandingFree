import React from 'react'
import { ProductCard } from './ProductCard'

export const NavDetail = ({ categories }) => {
  return (
    <div className='inline-flex w-screen lg:w-[1200px] h-fit min-h-[500px] '>
        <div className='w-2/5  lg:w-2/3  p-4 h-[500px] overflow-y-auto '>
            <ul className = "columns-1 md:columns-2 lg:columns-5 gap-4 [grid-auto-rows:auto]  items-start h-fit w-full ">
              
                {categories.map((category, index) => (
                  <li key={index} className='break-inside-avoid mt-2'>
                    <h3 className='text-sm font-bold cursor-pointer'>{category.heading}</h3>
                    
                      <NavSubList subCategories={category.items} />
                  
                  </li>
                ))}
              
            </ul>
        </div>
        <div className='w-3/5  lg:w-1/3 box-border p-2 lg:p-4 min-h-[500px]'>
                <ProductCard/>

        </div>
    </div>
  )
}
 const NavSubList = ({ subCategories })=>{
  return (
    <ul className=''>
      {subCategories.map((subCategory, index) => 
        <li key={index} className='text-xs cursor-pointer hover:underline mt-1 underline-offset-4'>
          {subCategory}
        </li>
      )}
      </ul>
  )
 }