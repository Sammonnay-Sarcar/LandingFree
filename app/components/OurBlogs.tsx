import { Card, CardContent, CardDescription, CardTitle, CardHeader } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image';

export const OurBlogs = () => {
    const blogs = [{
            url:"https://illustrations.popsy.co/amber/man-riding-a-rocket.svg"
        },
    {
            url:"https://illustrations.popsy.co/amber/superhero.svg"
        },
    {
            url:"https://illustrations.popsy.co/amber/success.svg"
        },]
  return (
    <div className='w-full inline-flex flex-col h-fit lg:h-144'>
        <div className='inline-flex justify-center'>
            <hr className='w-24 border-t-2 border-black  mt-5 mx-2'/>
            <div className='w-fit h-fit my-auto '>
            <h1 className='text-4xl font-bold text-center mb-8'>Our Blogs</h1>
            </div>
            <hr className='w-24 border-t-2 border-black mt-5 mx-2'/>
        </div>
        <div className='grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8 px-4 md:px-14  mb-16 box-border '>
            {blogs.map((item, index) => (
                <BlogCard key={index} item={item}/>
            ))}
        </div>
    </div>
        
  )
}
const BlogCard = ({item}) => {
    return (
        <div className='inline-flex flex-col justify-center h-80 my-4 rounded-md hover:shadow-md gap-4 cursor-pointer  shadow-xl transition-shadow duration-300'>
            <div className='h-2/3 w-full'>
               <img  src={item.url}
               alt="Blog Image"
               className='object-cover h-full w-full'/>
            </div>
            <div className='h-1/3  p-4'>
                <h1 className='text-lg font-bold'>
                    Blog Title
                </h1>
                <span className='inline-block h-fit w-full text-xs leading-tight'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
            </div>
        </div>
    )}
