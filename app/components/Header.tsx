import { Apple, Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card"
import Image from 'next/image'
import {Trash} from 'lucide-react'
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <div className='md:px-14 w-full'>
          <span className="inline-flex justify-between w-full h-12">
            <span className="inline-flex my-auto gap-1 md:gap-2">
              <Apple size={24} />
              <h1 className="inline-block md:hidden text-xs mt-1 md:mt-0 font-extrabold">SC</h1>
              <h1 className="hidden md:inline-block text-md mt-1 md:mt-0 font-extrabold">SAM'S CABIN</h1>
            </span>
            
            <span className="inline-flex bg-secondary min-w-fit w-1/2 justify-between p-1 md:p-2 box-border rounded-md gap-2">
              <input className="bg-secondary w-full  text-xs md:text-md" placeholder="Search for products..." type="text" name="search" id="searchItem" />
              <button type="submit">
                <Search size={20} />
              </button>
            </span>

            <span className="inline-flex gap-2 md:gap-4 my-auto">
              <HoverCard>
                <HoverCardTrigger>
                  <User size={24} />
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <div className=" h-fit">
                    <ul>
                      <li className='inline-flex flex-col'>
                        <span className="text-xs">Hello,</span>
                        <span className='font-bold text-md'>Sammonnay</span>
                      </li>
                      <li className='cursor-pointer hover:underline underline-offset-4'>
                        <span className='text-sm'>Your Profile</span>
                      </li>
                      <li className='cursor-pointer hover:underline underline-offset-4'>
                        <span className='text-sm'>Orders</span>
                      </li>
                      <li className='cursor-pointer hover:underline underline-offset-4'>
                        <span className='text-sm'>Settings</span>
                      </li>
                      <li className='cursor-pointer hover:underline underline-offset-4'>
                        <span className='text-sm text-red-700 font-semibold'>Log out</span>
                      </li>
                    </ul>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <ShoppingCart size={24} />
                </HoverCardTrigger>
                <HoverCardContent className="w-72">
                  <CartItems/>
                  <CartItems/>
                  <Button className='w-full'>
                    Checkout
                  </Button>
                </HoverCardContent>
              </HoverCard>
              
            </span>
          </span>
          
        </div>
  )
}
const CartItems = ()=>{
  return(
    <div className="inline-flex w-full mt-2 h-20 rounded-md shadow-md hover:shadow-xl ">
        <div className='w-1/5 h-full'>
          <Image src="https://illustrations.popsy.co/amber/idea-launch.svg"
            width={20}
            height={20}
            alt="CartProdImg"className="w-full h-full object-cover"
          />
        </div>
        <div className='w-3/5 h-full justify-center box-border pl-4 inline-flex flex-col '>
          <div>  Product Description</div>
          <div className=' inline-flex w-full justify-start gap-2'>
          <div className='text-sm text-gray-500 line-through  inline-block my-auto'>
            $299
          </div>
          <div className='text-lg  font-bold inline-block '>
            $150
          </div>
            </div>
        
        </div>
        <div className='w-1/5 h-full py-2'>
         <Button className='h-full'>
            <Trash width={20}/>
         </Button>

        </div>
    </div>
  )
}