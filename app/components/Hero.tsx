import { Button } from '@/components/ui/button'
import React from 'react'
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full h-144 mt-10 inline-flex group overflow-x-hidden ">
      <div className=" h-full w-full flex-none ">
        <Image 
        alt="Engineer Illustration"
        src="https://illustrations.popsy.co/amber/engineer.svg"
        width={100}
        height={100}
        className="w-full h-full  object-fill object-center"
        />
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent backdrop-blur-md h-full w-full flex-none inline-flex flex-col justify-end  gap-4 relative -left-full">
        <h1 className="text-4xl font-bold">
          Stylish Floor Lamp
        </h1>
        <span className="w-2/3 inline-block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum a sapiente pariatur amet architecto ipsa animi laborum nemo similique. Corporis, voluptates maxime? Placeat modi ex aut. Soluta culpa corporis tenetur!
        </span>
        <span className="text-3xl font-extrabold">
          $199.99
        </span>
        <span className="inline-flex w-40 gap-2">
           <Button type="submit"  className="w-full">
                        Buy Now
                    </Button>
                    <Button type="submit" variant="outline" className="w-full ">
                        Add to cart
                    </Button>
        </span>
      </div>
    </div>
  )
}
