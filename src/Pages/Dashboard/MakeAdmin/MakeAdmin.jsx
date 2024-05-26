import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import AdminRow from './AdminRow';
// import AdminRow from './AdminRow';

const MakeAdmin = () => {
  const { data: users, isLoading , refetch} = useQuery('users', () => fetch('https://assignment-12-server.onrender.com/users', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))
    // .then(data => console.log(data))
  if (isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h2>{users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
        <th></th>
        <th>Name</th>
        <th>Make Admin</th>
        <th>Remove User</th>
      </tr>
          </thead>
          <tbody>
            {
          users &&  users.map(user => <AdminRow key={user._id} user={user} refetch={refetch}></AdminRow>)
        }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;