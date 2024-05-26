import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmModal from '../../Shared/ConfirmModal';

const SingleOrder = ({ orders, index, refetch, setdeleteOrder}) => {
   
    const {email, order, customer, availableQuentity} = orders;
    // console.log(order)
    const handleDelete = () => {

                fetch(`https://assignment-12-server.onrender.com/order?email:${email}`,
                {
                    method: 'DELETE',

                } )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast(`${order} is Deleted`)
                        refetch()
                    });
    }
    return (
        <tr key={index}>
        <th>{index + 1}</th>
        <td>{order}</td>
        <td>{customer}</td>
        <td>{availableQuentity}</td>
        <td><button onClick={()=>handleDelete(email)} className='btn btn-xs btn-error'>delete</button></td>
        {/* <label for="Confirmation"  className="btn modal-button btn-xs btn-primary mr-5">Cancle</label> */}
        <td><label for="Confirmation" onClick={()=> setdeleteOrder(order._id)} className="btn modal-button btn-xs btn-primary mr-5">Cancle</label></td>
       
    </tr>
    );
};

export default SingleOrder;