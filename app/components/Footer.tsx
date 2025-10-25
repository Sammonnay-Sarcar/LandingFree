import React from 'react'
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <div className="inline-flex flex-wrap w-full h-fit pb-10">
        <div className='w-1/3 md:w-1/5 inline-flex flex-col justify-center px-4'>
            <h1 className="text-sm  md:text-2xl font-bold">Sams Cabin.</h1>
            <span className='text-xs md:text-lg'>
                © 2024 Sam's Cabin. All rights reserved.
            </span>
        </div>
        <div className='w-2/3 md:w-3/5 grid h-full grid-cols-3 gap-5 justify-center '>
            <div className='px-0 md:px-4'>
                <span className='font-bold text-xs md:text-md'>
                    About Us
                </span>
                <ul>
                    <li className='text-sm text-gray-400 cursor-pointer hover:underline underline-offset-4 mt-1 md:mt-4  '>
                        About Us
                    </li>
                    <li className='text-sm text-gray-400 cursor-pointer hover:underline underline-offset-4 mt-1 md:mt-4'>
                        Store Location
                    </li>
                    <li className='text-sm text-gray-400 cursor-pointer hover:underline underline-offset-4 mt-1 md:mt-4'>
                        Contacts
                    </li>
                    <li className='text-sm text-gray-400 cursor-pointer hover:underline underline-offset-4 mt-1 md:mt-4'>
                        Orders Tracking
                    </li>
                </ul>
            </div>
            <div className='px-0 md:px-4'>
                <span className='font-bold text-md'>
                    Useful Links
                </span>
                <ul>
                    <li className='text-sm text-gray-400 cursor-pointer hover:underline underline-offset-4 mt-1 md:mt-4'>
                        Returns
                    </li>
                    <li className='text-sm text-gray-400 cursor-pointer hover:underline underline-offset-4 mt-1 md:mt-4'>
                        Support Policy
                    </li>
                    <li className='text-sm text-gray-400 cursor-pointer hover:underline underline-offset-4 mt-1 md:mt-4'>
                        Size Guide
                    </li>
                    <li className='text-sm text-gray-400 cursor-pointer hover:underline underline-offset-4 mt-1 md:mt-4'>
                        FAQs
                    </li>
                </ul>
            </div>
            <div className='px-0 md:px-4'>
                <span className='font-bold text-md'>
                    Follow Us
                </span>
                <ul>
                    <li className='text-sm text-gray-400 cursor-pointer hover:underline underline-offset-4 mt-1 md:mt-4'>
                        Facebook
                    </li>
                    <li className='text-sm text-gray-400 cursor-pointer hover:underline underline-offset-4 mt-1 md:mt-4'>
                        Instagram
                    </li>
                    <li className='text-sm text-gray-400 cursor-pointer hover:underline underline-offset-4 mt-1 md:mt-4'>
                        Twitter
                    </li>
                    <li className='text-sm text-gray-400 cursor-pointer hover:underline underline-offset-4 mt-1 md:mt-4'>
                        Youtube
                    </li>
                </ul>
            </div>
            
        </div>
        <div className='w-full md:w-1/5 inline-flex flex-col  px-4'>
            <span className='font-bold text-md'>
                    Subscribe
                </span>
                <span>
                    Get E-mail updates about our latest shop and special offers.
                </span>
                <span>
                    <input type="text" placeholder="Your email" className="w-full mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </span>
                <span>
                    <Button className="w-full mt-4 p-2  text-white rounded-md  transition-colors duration-300">
                        Subscribe
                    </Button>
                </span>
        </div>
    </div>
    
  )
}
