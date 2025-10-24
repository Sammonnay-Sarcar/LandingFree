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

export const ProductCard = () => {
  return (
    <Card className="h-full box-border px-4 py-2">
        <CardContent className="h-full ">
                <CardContent>
                    <Image src="https://illustrations.popsy.co/amber/product-launch.svg"
                    alt="Product Image"
                    width={450}
                    height={100}/>

                </CardContent>
                <CardHeader className="pt-2 pb-0">
                    <CardTitle className="text-lg font-bold mt-4">Modern Coffee Table</CardTitle>
                    <CardDescription className="text-sm text-gray-500 mt-2">A stylish and functional coffee table that complements any living room decor.</CardDescription>
                </CardHeader>
                <span className="inline-flex px-6 w-full">
                    <span className="text-lg font-bold mt-4">$199.99</span>
                    <span className="text-sm text-gray-500 mt-6 ml-2 line-through">$249.99</span>
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
