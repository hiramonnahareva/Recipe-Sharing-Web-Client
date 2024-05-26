import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const PurchaseCoins = ({ userCoins, setUserCoins }) => {
        const handlePurchase = async (amount) => {
          const stripe = await stripePromise;
      
          // Call your backend to create a checkout session
          const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount }),
          });
      
          const session = await response.json();
      
          // Redirect to Stripe checkout page
          const result = await stripe.redirectToCheckout({
            sessionId: session.id,
          });
      
          if (result.error) {
            console.error(result.error.message);
          }
        };
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl text-center'>Purchase Coins</h1>
            <div className='bg-white lg:mx-20 py-5'>
                <div className="grid lg:grid-cols-3">
                    <div className="p-5 text-center mx-4 mt-5 mb-5 px-8 shadow-lg">
                        <h2>Buy 100 coins for </h2>
                        <p>$1</p>
                        <button onClick={() => handlePurchase(100)}>Buy Now</button>
                    </div>
                    <div className="p-5 text-center mx-4 mt-5 mb-5 px-8 shadow-lg">
                        <h2>Buy 500 coins for </h2>
                        <p>$5</p>
                        <button onClick={() => handlePurchase(500)}>Buy Now</button>
                    </div>
                    <div className="p-5 text-center mx-4 mt-5 mb-5 px-8 shadow-lg">
                        <h2>Buy 1000 coins for $10</h2>
                        <p>$10</p>
                        <button onClick={() => handlePurchase(1000)}>Buy Now</button>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseCoins;
