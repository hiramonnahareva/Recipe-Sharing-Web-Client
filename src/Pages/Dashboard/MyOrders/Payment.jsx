import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L35QjDWL5z7UYjt7C58vhWpBF2tg8u4efDK0qIYUVNN5oEL6zkvbcAG4l2R4sstGfeAVkj6BDhAdn5Th8PnsQxA00nl75nw4M');
const Payment = () => {
    const {id} = useParams();
    const url = `https://assignment-12-server.onrender.com/order/${id}`;
    const {data: order, isLoading} = useQuery(['order', id], () => fetch(url, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }).then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
    
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">hello,<span className='text-secondary'>{order?.customer}</span></h2>
          <h3 class="text-[18px] text-primary">{order?.order}</h3>
          <p>your order quentity {order?.availableQuentity}</p>
          <p>Please Pay: {order?.price}</p>
        </div>
        <div class="card-body">
     {
         order &&  <Elements stripe={stripePromise}>
         <CheckoutForm order={order} />
       </Elements>
     }
        </div>
      </div>
    );
};

export default Payment;