import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavDetail } from './NavDetail';
import { NavItems } from './navItems';


export const Navbar = () => {
    
  return (
    <NavigationMenu className="mt-3 justify-start w-full ">
      <div id="Hello1" className='w-full overflow-x-auto inline-flex justify-start'>

      
        <NavigationMenuList className="">
          <div className='w-fit inline-flex'>
           
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
             
          </div>
            
        </NavigationMenuList>
        </div>
    </NavigationMenu>
  )
}