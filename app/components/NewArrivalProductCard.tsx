import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
CardButton} from "@/components/ui/card";
import {TopProducts } from './topProducts'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const NewArrivalProductCard = ({item}) => {
  return (
    <Card className="h-full box-border  hover:shadow-md gap-4 cursor-pointer  shadow-xl transition-shadow duration-300">
        <CardContent className="h-full px-2 pb-2">
                    <Image src={item.url}
                    alt="Product Image"
                    width={450}
                    height={100}/>
                <CardHeader className="pt-2 pb-0">
                    <CardTitle className="text-lg font-bold mt-4">{item.productTitle}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 mt-2">{item.productDescription}</CardDescription>
                </CardHeader>
                <span className="inline-flex px-6 w-full">
                    <span className="text-lg font-bold mt-4">${item.discountedPrice}</span>
                    <span className="text-sm text-gray-500 mt-6 ml-2 line-through">${item.originalPrice}</span>
                </span>
                <CardFooter className="inline-flex w-full gap-2">
                    <Button type="submit"  className="w-full">
                        Buy Now
                    </Button>
                    <Button type="submit" variant="outline" className="w-full ">
                        Add to cart
                    </Button>
                    
                </CardFooter>
        </CardContent>
    </Card>
               
    
  )
}
