import React from 'react'
import {Box, Wallet, Headset} from 'lucide-react'
export const Perks = () => {
  return (
    <div className='inline-flex w-full justify-between gap-6 my-12'>
        <div className="inline-flex box-border gap-4 px-4">
            <Box size={48} className="my-auto"/>
            <div>
                <h2 className="font-bold text-lg">Free Shipping</h2>
                <p className="text-sm text-gray-500">Enjoy free shipping on all orders over $50. Shop now and save!</p>
            </div>
        </div>
        <div className="inline-flex box-border gap-4 px-4">
            <Wallet size={48} className="my-auto"/>
            <div>
                <h2 className="font-bold text-lg">Flexible Payment</h2>
                <p className="text-sm text-gray-500">Enjoy flexible payment options on all orders. Shop now and save!</p>
            </div>
        </div>
        <div className="inline-flex box-border gap-4 px-4">
            <Headset size={48} className="my-auto"/>
            <div>
                <h2 className="font-bold text-lg">24/7 Support</h2>
                <p className="text-sm text-gray-500">Our support team is available 24/7 to assist you with any inquiries.</p>
            </div>
        </div>
    </div>
  )
}
