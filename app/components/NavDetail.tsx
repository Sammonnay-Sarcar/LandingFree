import React from 'react'
import { ProductCard } from './ProductCard'

export const NavDetail = ({ categories }) => {
  return (
    <div className='inline-flex w-[1200px] h-[500px] overflow-y-auto'>
        <div className='w-4/5  p-4'>
            <ul className = "columns-5 gap-4 [grid-auto-rows:auto]  items-start">
              
                {categories.map((category, index) => (
                  <li key={index} className='break-inside-avoid mt-2'>
                    <h3 className='text-sm font-bold cursor-pointer'>{category.heading}</h3>
                    
                      <NavSubList subCategories={category.items} />
                  
                  </li>
                ))}
              
            </ul>
        </div>
        <div className='w-1/3 box-border p-4'>
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
