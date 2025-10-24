import React from 'react'
import { NewArrivalProductCard } from './NewArrivalProductCard'

export const NewArrival = () => {
    const newArrivals = [
        {
            url:"https://illustrations.popsy.co/amber/shaking-hands.svg",
            productTitle: "Wireless Headphones",
            productDescription: "Noise-cancelling over-ear headphones with 20h battery life",
            originalPrice: 4999,
            discountedPrice: 3499,
        },
        {
            url:"https://illustrations.popsy.co/amber/creative-work.svg",
            productTitle: "Smartwatch Pro",
            productDescription: "Tracks heart rate, sleep, and steps with AMOLED display",
            originalPrice: 8999,
            discountedPrice: 6999,

        },
    {
            url:"https://illustrations.popsy.co/amber/team-idea.svg",
            productTitle: "Bluetooth Speaker",
            productDescription: "Compact speaker with deep bass and waterproof design",
            originalPrice: 2999,
            discountedPrice: 1999,
        },
    {
            url:"https://illustrations.popsy.co/amber/man-riding-a-rocket.svg",
            productTitle: "Gaming Mouse",
            productDescription: "Ergonomic design with RGB lights and 7 programmable buttons",
            originalPrice: 2499,
            discountedPrice: 1599,
        },
    {
            url:"https://illustrations.popsy.co/amber/superhero.svg",
            productTitle: "Mechanical Keyboard",
            productDescription: "Blue switch keyboard with backlight and detachable cable",
            originalPrice: 5999,
            discountedPrice: 4499,
        },
    {
            url:"https://illustrations.popsy.co/amber/success.svg",
            productTitle: "Smart LED Bulb",
            productDescription: "Wi-Fi-enabled color bulb compatible with Alexa and Google Home",
            originalPrice: 999,
            discountedPrice: 699,
        },
    {
            url:"https://illustrations.popsy.co/amber/crashed-error.svg",
            productTitle: "Portable Power Bank",
            productDescription: "20000mAh fast-charging power bank with dual USB ports",
            originalPrice: 3499,
            discountedPrice: 2599,
        },
    {
            url:"https://illustrations.popsy.co/amber/idea-launch.svg",
            productTitle: "4K Action Camera",
            productDescription: "Waterproof action cam with 4K recording and image stabilization",
            originalPrice: 10999,
            discountedPrice: 8499,
  },
        ];
  return (
    <div>
        <span className="inline-block w-full text-center text-2xl font-bold">
            New Arrivals
        </span>
        <span className='inline-block w-full text-center'>
            <hr className='w-24 mx-auto border-t-2 border-black'/>
        </span>
        <span className="text-center inline-block w-full box-border px-32">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum repudiandae blanditiis fugit quas minus veniam nihil quam totam expedita? Est, inventore assumenda atque sequi nemo distinctio ad explicabo mollitia.
        </span>
        <div className="grid h-full grid-cols-4 gap-3 mt-8  mb-16">
            {newArrivals.map((item, index) => (
                <NewArrivalProductCard key={index} item={item}/>
            ))}
        </div>
    </div>
  )
}
