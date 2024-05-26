import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

const AddReviews = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imgStorageKey = '3a756175d8da3cf8a08b98649ad47085'
    const onSubmit = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,

        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        img: img,
                        reviewer: data.name,
                        description: data.describe,
                        rating: data.rating,

                    }
                    fetch('https://assignment-12-server.onrender.com/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data) {
                                console.log()
                                if(data.massage === 'Forbidden access'){
                                    toast.error('something is wrong')
                                }
                                else{
                                    toast.success('Your review added successfuly')
                                    reset()
                                    
                                }
                            }
                            else {
                                toast.error('Failed to add product')
                            }
                        })
                }
            })
    };
    return (
        <div>
            <h2 className='text-2xl'>Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs h-50">
                    <textarea {...register("describe", { required: true })} className='w-[100%] border-[1px] border-gray-300 rounded-lg p-5' placeholder='your masage' rows="5" id="" ></textarea>
                    <label class="label">
                        {errors.describe && <span class="label-text-alt text-red-600">Describe is required</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        {errors.describe?.type === 'required' && <span className="label-text-alt text-red-500">{errors.describe.message}</span>}
                        {errors.describe?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.describe.message}</span>}
                    </label>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Add Ratings</span>
                        </label>
                        <input
                        type="number"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'Rating is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                    </label>
                        <label className="label">
                            {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                        </label>
                    </div>
                    <input
                        type="file"
                        placeholder="Your Image"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is Required'
                            },
                        })}
                    />
                </div>
                <div className="card-actions justify-end my-4">
                    <input type="submit" value="add" className="btn btn-primary max-w-xs text-white w-full" />
                </div>
            </form>
        </div>
    );
};

export default AddReviews;