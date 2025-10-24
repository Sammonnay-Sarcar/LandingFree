import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavDetail } from './NavDetail';
import { NavItems } from './navItems';


export const Navbar = () => {
    
  return (
    <NavigationMenu className="mt-3   ">
        <NavigationMenuList>
            {NavItems.map((item, index)=>
            <NavigationMenuItem key={index}>
                <NavigationMenuTrigger>
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className=''>
                    <NavDetail categories={item.categories} />
                    
                </NavigationMenuContent>
            </NavigationMenuItem>
            )}
            
            
        </NavigationMenuList>
    </NavigationMenu>
  )
}
