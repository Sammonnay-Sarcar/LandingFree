import { Menu } from 'lucide-react'
import React from 'react'

export const MenuToggle = () => {
  return (
    <>
    <div className=" inline-block  md:hidden py-1 ">
              <input type="checkbox" name="nav-toggle" id="nav-toggle" className="peer hidden"/>
              <label htmlFor="nav-toggle" className="flex items-center justify-center w-full cursor-pointer gap-2">
                Menu
                <Menu size={24} />
              </label>
              <nav className="bg-white z-50 peer-checked:inline-flex transition-all duration-900 hidden h-svh w-2/3 absolute right-0 bg-secondary flex-col justify-center text-center font-bold gap-3 p-4">
                <a href="">News</a>
                <a href="">Events</a>
                <a href="">Our Members</a>
                <a href="">Opening Hours</a>
                <a href="">Contact Us</a>
                <a href="">Jobs</a>
              </nav>
            </div>
            <div>
             
              <nav className="md:inline-flex transition-all duration-900 hidden  h-full w-full flex-row gap-3 justify-center text-center">
                <a href="">News</a>
                <a href="">Events</a>
                <a href="">Our Members</a>
                <a href="">Opening Hours</a>
                <a href="">Contact Us</a>
                <a href="">Jobs</a>
              </nav>
            </div>
            </>
  )
}
