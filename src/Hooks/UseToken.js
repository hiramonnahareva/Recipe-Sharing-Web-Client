import { useEffect, useState } from 'react';

const UseToken = user => {
   const [token, setToken] = useState('');
   useEffect(()=> {
       const email = user?.user?.email;
       const newUser = {email: email};
    //    if(email){
    //        fetch(`http://localhost:3000/users/${email}`, {
    //            method: 'PUT',
    //            headers: {
    //                'content-type': 'application/json'
    //            },
    //            body:JSON.stringify(newUser)
    //        })
    //        .then(res => res.json())
    //        .then(data => {
    //            const accessToken = data.token;
    //            setToken('data', accessToken);
    //            localStorage.setItem('accessToken', accessToken)
    //            setToken(accessToken)
    //        })
    //    }
       console.log(newUser)
   }, [user])
   return [token];
};

export default UseToken;