import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({user, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`https://assignment-12-server.onrender.com/user/admin/${email}`, {
            method:'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403 ){
                toast.error('Faild to make an admin');
            }
           return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){ 
                refetch();
                console.log(data);
                toast.success('successfully made an admin');
            }

        })
    }
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-sm btn-primary">make Admin</button>}</td>
        <td><button className="btn btn-sm btn-secondary">Remove User</button></td>
      </tr>
    );
};

export default AdminRow;