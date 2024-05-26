import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [currentuser, setCurrent] = useState({})
    // const [updateUser, setupdateUser] = useState({});
    const { register, handleSubmit, formState: { errors } , reset} = useForm();
    const [user] = useAuthState(auth) 
    useEffect(()=> {
    if(user){
            fetch(`https://assignment-12-server.onrender.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setCurrent(data))
        }
    }, [user])
    const onSubmit = data => {
        const {_id} = currentuser;
        const {name, email, address, phone, education} = data;
        console.log(_id, data)
        const updateUser = {name, email, address, phone, education};
        const url = `https://assignment-12-server.onrender.com/user/${_id}`;
       if(_id){
        fetch (url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then (res => res.json())
        .then (data => {
            console.log ('success', data);
            toast('user added successfully');
            reset();
        })
       }
    }
    return (
                <div className="flex justify-evenly w-full">
        <div class="card bg-base-100 shadow-xl my-30 ">
        <div class="card-body">
          <h2 class="card-title">hello,<span className='text-secondary'>{user?.displayName}</span></h2>
          <p class="text-[18px]">your email account: <span className='text-secondary'>{user?.email}</span></p>
          <p>If you update your profile Please fill this form add update.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
 <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Name</span>
  </label>
  <input 
  type="text"
   placeholder="Your Name"
    className="input input-bordered w-full max-w-xs"
    {...register("name", { 
        required: {
            value: true,
            message: 'Name is Required'
        },
     })} 
     />
  <label className="label">
    <span className="label-text">Your Email</span>
  </label>
  <input 
  type="email"
   placeholder="Your email"
    className="input input-bordered w-full max-w-xs"
    {...register("email", { 
        required: {
            value: true,
            message: 'Email is Required'
        },
     })} 
     />
      <label className="label">
    <span className="label-text">Your Address</span>
  </label>
  <input 
  type="text"
   placeholder="Your Address"
    className="input input-bordered w-full max-w-xs"
    {...register("address", { 
        required: {
            value: true,
            message: 'Address is Required'
        },
     })} 
     />
      <label className="label">
    <span className="label-text">Your Education</span>
  </label>
  <input 
  type="text"
   placeholder="Your education"
    className="input input-bordered w-full max-w-xs"
    {...register("education", { 
        required: {
            value: true,
            message: 'education is Required'
        },
     })} 
     />
</div>
 <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Phone</span>
  </label>
  <input 
  type="number"
   placeholder="Your Phone"
    className="input input-bordered w-full max-w-xs"
    {...register("phone", { 
        required: {
            value: true,
            message: 'Phone is Required'
        },
     })} 
     />
     
     <input type="submit" value="login" className="btn btn-primary max-w-xs text-white w-full my-4" />
     </div>
     </form>
          </div>
      
      </div>
      <div>
          <p>Your Name: {user.displayName}</p>
         {
             currentuser && <div>
                  <p>Your  Email: {currentuser.email}</p>
          <p>Your education: {currentuser.education}</p>
          <p>Your address: {currentuser.address}</p>
      <p>Your New Phone: {currentuser.phone}</p>
             </div>
         }
      </div>
       </div>
    );
};

export default MyProfile;