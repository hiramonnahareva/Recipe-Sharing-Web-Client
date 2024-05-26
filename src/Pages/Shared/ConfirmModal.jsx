import React from 'react';
import { toast } from 'react-toastify';

const ConfirmModal = ({id , setOrders}) => {
    console.log(id)
   const handleDelete = () => {
    fetch (`https://assignment-12-server.onrender.com/order/${id}`,{
      method: 'DELETE',
      headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
      

  })
  .then(res => res.json())
  .then(data => {
     
     if(data.deletedCount){
      toast.success(`${data.name} is deleted.`)
     }
     else{
       toast.error(`something is wrong`)
     }
  })

    }
    return (
        <div>
<input type="checkbox" id="Confirmation" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Are You sure to Delete!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
    <button onClick={() => handleDelete()} className="btn btn-xs btn-error">delete</button>
      <label for="Confirmation" class="btn btn-xs btn-secondary">cancle</label>
    </div>
  </div>
</div>
   </div>
    );
};

export default ConfirmModal;