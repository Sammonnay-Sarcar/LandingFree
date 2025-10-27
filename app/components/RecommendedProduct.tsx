import React from 'react'
import {Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,} from "@/components/ui/card";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type RecommendedProduct = {
  url: string;
  productTitle: string;
  productDescription: string;
  discountedPrice: number;
  originalPrice: number;
};

type RecommendedProductCardProps = {
  item: RecommendedProduct;
};

export const RecommendedProductCard: React.FC<RecommendedProductCardProps> = ({item}) => {
  return (
    <Card className="h-128 w-72 box-border  hover:shadow-md gap-4 cursor-pointer  shadow-xl transition-shadow duration-300">
        <CardContent className= "px-0 md:px-2">
            <div className="h-full px-0 md:px-1 pb-2">
                    <Image src={item.url}
                    alt="Product Image"
                    width={450}
                    height={100} className=""/>
                <CardHeader className="pt-2 pb-0">
                    <CardTitle className="text-lg font-bold mt-4">{item.productTitle}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 mt-2 min-h-14 h-fit">{item.productDescription}</CardDescription>
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
            </div>
        </CardContent>
    </Card>
               
    
  )
}
