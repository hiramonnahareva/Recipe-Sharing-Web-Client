import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Modal = ({ order, setOrder }) => {
    const {_id, name, availableQuentity, price} = order;
    const formSubmit = event => {
        event.preventDefault();
        const availableQuentity = event.target.available.value;
        console.log(_id,availableQuentity,  name );
        const order = {
            orderId: _id,
            price: price,
            order: name,
            availableQuentity,
            customer:user.displayName,
            email:user.email,
            address:event.target.address.value,
            phone:event.target.phone.value,
        }
        fetch(`https://assignment-12-server.onrender.com/order/${user.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data){
                toast.success(`You order is booked`)
            }
            else{
                toast.error('somethign is wrong')
            }
        })
        setOrder(null);
        
    }
    const [user] = useAuthState(auth);
    return (
        <div>
            <input type="checkbox" id="Order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label for="Order-modal" className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg my-2">Ordered Item {name} </h3>
                    <form onSubmit={formSubmit}>
                        <input type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs my-2" />
                        <input type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs my-2" />

                        <select name='available' className="select select-bordered w-full max-w-xs">
                            {
                                availableQuentity && availableQuentity.map((available) => <option value={available}>{available}</option>)
                            }
                        </select>
                        <input type="number" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs my-2" />
                        <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xs my-2" />
                        <input type="submit" value='submit' className="input text-center text-xl text-white bg-primary w-full max-w-xs my-2" />
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Modal;