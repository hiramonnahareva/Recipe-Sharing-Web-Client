
// const Payment = () => {
//     const {id} = useParams();
//     const url = `https://assignment-12-server.onrender.com/order/${id}`;
//     const {data: order, isLoading} = useQuery(['order', id], () => fetch(url, {
//         headers: {
//             authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         }
//     }).then(res => res.json()));
//         };

import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { RiCoinsFill } from 'react-icons/ri';


const PurchaseSingle = ({coins}) => {

    const {id, coin, text, amount} = coins;

    
    
    
    const  handlePurchase  = async () => {
        
        const stripePromise = await loadStripe('pk_test_51L35QjDWL5z7UYjt7C58vhWpBF2tg8u4efDK0qIYUVNN5oEL6zkvbcAG4l2R4sstGfeAVkj6BDhAdn5Th8PnsQxA00nl75nw4M'); 

        // console.log(stripePromise);


    const elements = useElements();

    if (!stripe || !elements) {
        return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripePromise.createPaymentMethod({
        type: 'card',
        card: cardElement,
    });

    if (error) {
        console.error(error);
    } else {
        const response = await fetch('https://recipe-sharing-web-server.onrender.com/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                paymentMethodId: id,
                amount: amount,
            }),
        });

        const { sessionId } = await response.json();

        const { error } = await stripePromise.redirectToCheckout({
            sessionId,
        });

        if (error) {
            console.error(error);
        }
    }
    }

    // console.log(coin);

    


    return (
        <div className='p-5 flex flex-col items-center text-center mx-4 mt-5 mb-5 px-8 shadow-lg'>
            <p className='text-5xl flex items-center text-center px-[20px] py-[6px]'>
                <RiCoinsFill className='text-primary' /> </p>
            <span className="text-[28px] text-primary font-bold">{coin}</span>
            <h1 className='text-[20px]'>{text}</h1>
            {/* <Elements stripe={stripePromise}> */}
            <button onClick={() => handlePurchase(amount)} className="btn btn-primary rounded-full text-gray-100 my-[8px]">Buy Now!</button>
            {/* </Elements> */}

            {/* </CardElement> */}
        </div>
    );
};

export default PurchaseSingle;