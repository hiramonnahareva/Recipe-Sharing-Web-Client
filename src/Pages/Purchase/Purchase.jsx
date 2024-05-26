import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Modal from './Modal';


const Purchase = () => {
    // const [user] = useAuthState(auth) 
    const { id } = useParams();
    
    const url = `https://assignment-12-server.onrender.com/service/${id}`;
    const { data: service, isLoading} = useQuery(['service', id], () => fetch(url).then(res => res.json()))
    const [order, setOrder] = useState(service);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-center my-8'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service?.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service?.name}</h2>
                    <h3 className="text-xl">Par Box Parts Quentity  <span className='text-secondary'>{service?.minQuentity}</span></h3>
                    <h3 className="text-xl">Available options <span className='text-secondary'>{service?.availableQuentity?.length}</span></h3>
                    <h3 className="text-xl">Price: <span className='text-secondary'>{service?.price}</span></h3>
                    <p className='text-justify'>{service?.description}</p>
                    {
                        order && <Modal order={order} setOrder={setOrder}></Modal>
                    }
                     <label htmlFor="Order-modal" 
                      disabled={service?.availableQuentity.length === 0}
                      onClick={()=> setOrder(service ? service : '')}
                       className='btn btn-secondary uppercase text-white font-bold my-4'>Order</label>
                </div>
            </div>
        </div>
    );
};

export default Purchase;