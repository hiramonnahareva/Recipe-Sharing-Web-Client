import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ order }) => {
  const elements = useElements();
  const stripe = useStripe();
  const [cardError, setCardError] = useState('');
  const [success, setsuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, settransactionId] = useState('');
  console.log(order)
  const {customer, price, email, _id} = order;
  useEffect(() => {
    if (price) {
      fetch('https://assignment-12-server.onrender.com/create-payment-intent', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          // authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({price}),
      })
        .then(res => res.json())
        .then(data => {
          if (data.clientSecret){
            console.log(data)
            setClientSecret(data.clientSecret);
          }
          // console.log(data)
        })
    }
  }, [price])
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return 
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })
    setsuccess('');
    setLoading(true);
    if (error) {
      setCardError(error.message)
    }
    else {
      setCardError('')
    }
    const {paymentIntent, error: intendError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: customer,
            email: email,
          },
        },
      },
    );
    if(intendError){
      setCardError(intendError?.message);
      setLoading(false);
      setsuccess('')
    }
    else{
      setCardError('')
      settransactionId(paymentIntent.id);
      setsuccess('Congatulation you are successfully payed');
      // payment on database
      console.log('payment', paymentIntent)
      const payment = {
        appoinment: _id,
        transactionId: paymentIntent.id,
      }

      fetch(`https://assignment-12-server.onrender.com/order-update/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          // 'authorization': 
        },
        
        body: JSON.stringify(payment)
      }).then(res => res.json())
      .then(data => {
        setLoading(false);
        // console.log(data);
      })
    }
    
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success btn-sm my-5' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-error'>{cardError}</p>
      }
      {
        success && <div><p className='text-success'>{success}</p>
         <p> <span className="text-orange-500">{transactionId}</span></p>
         </div>
      }
    </>
  );
};

export default CheckoutForm;