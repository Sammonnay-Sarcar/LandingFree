import React from 'react'
import Image from 'next/image'
import next from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldError
} from "@/components/ui/field"
import { Input } from "@/components/ui/input" 
import { Button } from '@/components/ui/button';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full h-144 ">
      <div className='w-full h-full'>
      <div className='w-full h-full'>
        <Image
          src="https://illustrations.popsy.co/amber/app-launch.svg"
          width={250}
          height={250}
          alt="login page background abstract image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className='relative -top-full w-full h-full pt-10'>
        <Card className="w-full md:w-[400px] h-full md:h-[500px] mx-auto ">

          <CardHeader className="pb-2 text-center">
            Login
          </CardHeader>
          <CardDescription className="px-6 text-center">
            Login to your account for the complete experience
          </CardDescription>
          <CardContent className="mt-4">
               {children}
      </CardContent>
      <CardFooter className="mt-4 flex-col gap-4">
        <Button className='w-full'>Login</Button>
        <Button variant='secondary' className='w-full'>Register</Button>
      </CardFooter>
          
        </Card>
      </div>
      </div>
   </div>
    
  )
}

export default layout