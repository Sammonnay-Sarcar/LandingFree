import React from 'react'
import {Item} from '@/components/ui/item'
import {Badge} from '@/components/ui/badge'
import {Button} from '@/components/ui/button'
import {ArrowLeft, Calendar, Heart, Package, Percent, Star, Truck} from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

const ProductPage = () => {
    const colours = [
        { name : "Royal Blue",shade : "#1A2A4F"},
        { name : "Orange",shade : "#F87B1B"},
        { name : "Red",shade : "#CD2C58"},
        { name : "Teal",shade : "#016B61"},
        { name: "Crimson", shade: "#DC143C" },
        { name: "Royal Blue", shade: "#4169E1" },
        { name: "Amber", shade: "#FFBF00" },
        { name: "Emerald", shade: "#50C878" },
        { name: "Slate Gray", shade: "#708090" },
    ]
    const sizes = [
        {name:"S", isAvailable:"false"},
        {name:"M", isAvailable:"true"},
        {name:"L", isAvailable:"false"},
        {name:"XL", isAvailable:"true"},
        {name:"XXL", isAvailable:"true"},
    ]
  return (
    <Item className="inline-flex flex-col justify-start gap-0">
    <Item className="w-full h-[34rem] gap-0 p-0" >
        <Item className="fixed z-50 top-32  gap-1 w-screen  p-1 py-0 bg-white">
            <ArrowLeft size={18}/>
                <Item className="px-0 hover:font-bold">
                    Stylish Floor Lamp
                </Item>   
        </Item>
        <Item className="columns-2 flex-nowrap pt-0 w-full h-128 box-border gap-1">
            <Item className='w-1/2 pt-0 pr-0 h-full '>
                <Item className='w-full pt-0 pr-0 h-full shadow-lg hover:shadow-md rounded-md'>
                    <Image src="https://illustrations.popsy.co/amber/app-launch.svg" 
                    fill
                    alt="Main product  image"
                    className='aspect-3/2 w-full h-full !relative'/>
                </Item>
            </Item>
            <Item className='w-1/2 h-full gap-0 pl-0 gap-1 pt-0'>
                <Item className='w-full h-1/2 box-border p-0 inline-flex gap-1 flex-nowrap'>
                    <Item className="w-full h-full shadow-lg hover:shadow-md rounded-md">
                         <Image src="https://illustrations.popsy.co/amber/idea-launch.svg" 
                    fill
                    alt="Main product  image"
                    className='aspect-3/2 w-full h-full !relative'/>
                    </Item>
                    <Item className="w-full h-full shadow-lg hover:shadow-md rounded-md">
                         <Image src="https://illustrations.popsy.co/amber/success.svg" 
                    fill
                    alt="Main product  image"
                    className='aspect-3/2 w-full h-full !relative'/>
                    </Item>
                </Item>
                <Item className='w-full h-1/2 box-border p-0'>
                    <Item className="w-full h-full p-0 shadow-lg hover:shadoww-md rounded-md">
                        <Image
                        src="https://illustrations.popsy.co/amber/app-launch.svg"
                        fill
                        className='object-cover w-full h-full !relative'
                        alt="fourth product image"/>
                    </Item>
                </Item>
            </Item>
        </Item>
    </Item>
    <Item className="w-full inline-grid grid-cols-2 p-0 gap-0 ">
        <Item className="w-full py-0 pr-0  pl-8">
            <Item className="bg-secondary inline-flex flex-col w-full p-4 justify-start gap-0 text-left ">
                <Item className=" inline-flex flex-row w-full p-0 flex-nowrap justify-between">
                    <h1 className="text-4xl font-bold text-left w-4/5">Stylish Floor Lamp</h1>
                    <Item className="w-1/5 h-14 p-0 justify-end">
                     <Item className="bg-white box-border w-fit max-w-14 h-fit rounded-full max-h-14 hover:shadow-inner shadow-md hover:shadow-sm">
                        <Heart className='w-full h-full  mx-auto ' size={20}/>
                        </Item>   
                    
                    </Item>
                </Item>
                <Item className="p-0 inline-flex w-full flex-nowrap gap-0">
                    <Item className="p-0">
                        <Star size={14}/>
                    </Item>
                    <Item className="p-0 pl-1 font-bold">
                        <h4 className=' text-orange-500'>
                            4.9
                        </h4>
                    </Item>
                    <Item className="p-0 pl-2">
                        <p className='font-bold'>(41)New Reviews</p>
                    </Item>
                </Item>
                <Item className="inline-flex justify-start p-0 w-full items-start">

                
                <Item id="colorAndSize" className="inline-flex justify-start w-72  p-0 mt-4">
                    {colours.map((color,index)=>
                        <Item className=" p-0 flex-col gap-1 flex-shrink-0" key={index}>
                        <div style={{ backgroundColor: color.shade }}  className="p-6 rounded-full">

                        </div>
                        <Item className="p-0">
                            <p className='text-xs'>{color.name}</p>
                        </Item>
                    </Item>
                    )}
                    
                    
                </Item>
                <Item className=' h-52 p-0 w-[2px]'>
                    <hr className='w-full h-full bg-black'/>
                </Item>
                <Item className=" w-52 mt-0 flex-row gap-2">
                    {sizes.map((size,index)=>
                    <Badge key={index} variant={size.isAvailable == "true"?"default":"destructive"} className="rounded-full ">
                        <Link href="/" className='text-md py-1 px-4  '>
                            {size.name}
                        </Link>
                    </Badge>    )}
                    
                </Item>
                </Item>
                <Item className="w-full p-0 pt-6 gap-2 justify-start">
                    <Item className="w-full p-0">
                        <h1 className="w-full p-0 font-bold">
                            Description
                        </h1>
                    </Item>
                    <Item className="p-0">
                        <p className=''>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus. Magni reiciendis praesentium, quae eius hic officiis ea possimus deserunt esse voluptatem sint voluptates fugiat quod et repellendus veniam? Ratione?
                        </p>
                    </Item>
                </Item>
                <Item className="w-full p-4 mt-6  bg-white">
                    <Item className="w-full p-0">
                        <h1 className='font-bold text-lg'>
                            Shipping
                        </h1>
                    </Item>
                    <Item className="w-full p-0 flex-row flex-wrap gap-0">
                        <Item className=" flex-row p-2 w-1/2 ">
                            <Item className="p-4 bg-black rounded-full w-14 h-14">
                            <Percent size={24} className ="h-full w-full"color='white'/>
                            </Item>
                            <Item className="p-0 gap-0 w-48">
                                <Item className="p-0">
                                    <h2 className=' text-xs'>Discount</h2>
                                </Item>
                                <Item className="p-0">
                                    <p className='text-sm font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Item>
                            </Item>
                        </Item>
                        <Item className=" flex-row p-2 w-1/2 ">
                            <Item className="p-4 bg-black rounded-full w-14 h-14">
                            <Package size={24} className ="h-full w-full"color='white'/>
                            </Item>
                            <Item className="p-0 gap-0 w-48">
                                <Item className="p-0">
                                    <h2 className=' text-xs'>Package</h2>
                                </Item>
                                <Item className="p-0">
                                    <p className='text-sm font-bold'>Lorem ipsum dolor sit amet consectetur </p>
                                </Item>
                            </Item>
                        </Item>
                        <Item className=" flex-row p-2 w-1/2 ">
                            <Item className="p-4 bg-black rounded-full w-14 h-14">
                            <Calendar size={24} className ="h-full w-full"color='white'/>
                            </Item>
                            <Item className="p-0 gap-0 w-48">
                                <Item className="p-0">
                                    <h2 className=' text-xs'>Delivery </h2>
                                </Item>
                                <Item className="p-0">
                                    <p className='text-sm font-bold'>Lorem ipsum dolor sit </p>
                                </Item>
                            </Item>
                        </Item>
                        <Item className=" flex-row p-2 w-1/2 ">
                            <Item className="p-4 bg-black rounded-full w-14 h-14">
                            <Truck size={24} className ="h-full w-full"color='white'/>
                            </Item>
                            <Item className="p-0 gap-0 w-48">
                                <Item className="p-0">
                                    <h2 className=' text-xs'>Delivery Date</h2>
                                </Item>
                                <Item className="p-0">
                                    <p className='text-sm font-bold'>Amet consectetur adipisicing elit.</p>
                                </Item>
                            </Item>
                        </Item>
                    </Item>
                </Item>
            </Item>
        </Item>
    </Item>
    </Item>
  )
}

export default ProductPage