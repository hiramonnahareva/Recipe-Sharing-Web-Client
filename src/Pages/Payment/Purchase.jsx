import React, { useState } from 'react';
import { RiCoinsFill } from 'react-icons/ri';

import PurchaseSingle from './PurchaseSingle';


const PurchaseCoins = () => {

    const data = [
        {
            id: 1,
            coin: '$1',
            text: 'Buy 100 coins for',
            amount: 100,

        },
        {
            id: 2,
            coin: '$5',
            text: 'Buy 500 coins for',
            amount: 500,

        },
        {
            id: 3,
            coin: '$10',
            text: 'Buy 1000 coins for',
            amount: 1000
        }
    ]

return (
    <div className='flex flex-col items-center'>
        <h1 className='text-4xl text-center'>Purchase Coins</h1>
        <div className='bg-white lg:mx-20 py-5'>
            <div className="grid lg:grid-cols-3">


                {
                    data.map((coins) => <PurchaseSingle key={coins.id} coins={coins}></PurchaseSingle>

                    )
                }
                {/* <div className="p-5 flex flex-col items-center text-center mx-4 mt-5 mb-5 px-8 shadow-lg"> */}


                    {/* <p className='text-5xl flex items-center text-center px-[20px] py-[6px]'> */}



                        {/* <RiCoinsFill className='text-primary' /> </p>
                    <span className="text-[28px] text-primary font-bold">$1</span>
                    <h1 className='text-[20px]'> </h1>
                    <button onClick={() => handlePurchase(100)} className="btn btn-primary rounded-full text-gray-100 my-[8px]">Buy Now!</button>
                </div>
                <div className="p-5 flex flex-col items-center text-center mx-4 mt-5 mb-5 px-8 shadow-lg">
                    <p className='text-5xl flex items-center text-center px-[20px] py-[6px]'><RiCoinsFill className='text-primary' /> </p>
                    <span className="text-[28px] text-primary font-bold">$5</span>
                    <h1 className='text-[20px]'>Buy 500 coins for </h1>
                    <button onClick={() => handlePurchase(500)} className="btn btn-primary rounded-full text-gray-100 my-[8px]">Buy Now!</button>
                </div>
                <div className="p-5 flex flex-col items-center text-center mx-4 mt-5 mb-5 px-8 shadow-lg">
                    <p className='text-5xl flex items-center text-center px-[20px] py-[6px]'><RiCoinsFill className='text-primary' /> </p>
                    <span className="text-[28px] text-primary font-bold">$10</span>
                    <h1 className='text-[20px]'>Buy 1000 coins for $10</h1>
                    <button onClick={() => handlePurchase(1000)} className="btn btn-primary rounded-full text-gray-100 my-[8px]">Buy Now!</button> */}
                    {/* <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements> */}
                {/* </div> */}
            </div>
        </div>
    </div>
);
};

export default PurchaseCoins;
