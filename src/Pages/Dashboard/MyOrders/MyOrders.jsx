import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import ConfirmModal from '../../Shared/ConfirmModal';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    // console.log(user.email)
    const [deleteOrder, setdeleteOrder] = useState(null)
    useEffect(() => {
        if (user) {
            fetch(`https://assignment-12-server.onrender.com/order?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data));
        }
        
    }, [user?.email])
    return (
        <div className="overflow-x-auto lg:w-full w-96 px-2">

            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Customer</th>
                        <th>Ordered Quentity</th>
                        <th>Parts Name</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.customer}</td>
                                <td>{order.availableQuentity}</td>
                                <td>{order.order}</td>
                                <td>
                                    {(order.price && !order.paid) && <label for="Confirmation" onClick={()=> setdeleteOrder(order._id)} className="btn modal-button btn-xs btn-primary mr-5">Cancle</label>}
                                    {(order.price && !order.paid) && <Link to={`/dashboard/order/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && 
                                    <div className='text-success'>
                                        <p><span >paied</span></p>
                                    <p> TansectionId <span>{order.transactionId}</span></p>
                                    </div>
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {
               deleteOrder && <ConfirmModal user={user.email} setOrders={setOrders}></ConfirmModal>
            }
        </div>
    );
};

export default MyOrders;