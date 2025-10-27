import React from 'react'
import {Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle} from "@/components/ui/card";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const ProductCard = () => {
  return (
    <Card  className=" box-border px-2 lg:px-4 py-2 h-fit">
        <CardContent  className="h-full p-2 pt-0 inline-flex flex-col flex-shrink box-border">
                    <Image src="https://illustrations.popsy.co/amber/product-launch.svg"
                    alt="Product Image"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full "
                    />

                
                <CardHeader className="px-0 pt-2 pb-0 ">
                    <CardTitle  className="text-md lg:text-lg font-bold mt-4">Modern Coffee Table</CardTitle>
                    <CardDescription className="text-xs lg:text-sm text-gray-500 mt-2">A stylish and functional coffee table that complements any living room decor.</CardDescription>
                </CardHeader>
                <span className="inline-flex  w-full">
                    <span className="text-lg font-bold mt-4">$199.99</span>
                    <span className="text-sm text-gray-500 mt-6 ml-2 line-through">$249.99</span>
                </span>
                <CardFooter className="inline-flex w-full gap-2 px-0">
                    <Button type="submit"  className="w-1/2">
                        Buy Now
                    </Button>
                    <Button type="submit" variant="outline" className="w-1/2 ">
                        Add to cart
                    </Button>
                    
                </CardFooter>
        </CardContent>
    </Card>
               
    
  )
}
