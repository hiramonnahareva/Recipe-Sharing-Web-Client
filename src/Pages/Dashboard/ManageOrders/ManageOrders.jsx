import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ConfirmModal from '../../Shared/ConfirmModal';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    // console.log(user.email)
    const [deleteOrder, setdeleteOrder] = useState(null)
    useEffect(() => {
        if (user) {
            fetch(`https://assignment-12-server.onrender.com/order`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])
    return (
        <div className="overflow-x-auto lg:w-full w-96 px-2">

            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Quentity slots</th>
                        <th>Delete</th>
                        <th>Status</th>
                        <th>payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.order}</td>
                                <td>{order.availableQuentity.length}</td>
                                {/* <td>{order.order}</td> */}
                                <td>
                                    {order && <label for="Confirmation" onClick={()=> setdeleteOrder(order._id)} className="btn modal-button btn-xs btn-primary mr-5">Delete</label>}
                                </td>
                                <td>
                                    {order.paid && <button  className="btn modal-button btn-xs bg-green-400 mr-5">shipped</button> }
                                    {!order.paid &&<button  className="btn modal-button btn-xs btn-error mr-5">panding</button> }
                                </td>
                                <td>
                                    {order.paid && <button  className="btn modal-button btn-xs bg-green-400 mr-5">paid</button> }
                                    {!order.paid && <button  className="btn modal-button btn-xs btn-error mr-5">unpaid</button> }
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

export default ManageOrders;