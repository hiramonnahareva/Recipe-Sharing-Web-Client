import { signOut } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiCoinsFill } from "react-icons/ri";
import image from '../../asset/logo.png';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../../Hooks/UseToken';
import { createContext, useEffect, useState } from 'react';
import { useCoins } from './CoinContext';
import { toast } from 'react-toastify';

const Navbar = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { coins, setCoins } = useCoins();


    //  addCoins()
    // }
    // })

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [token] = UseToken(gUser)

    if (token) {
        navigate(from, { replace: true });
    }

    const [user] = useAuthState(auth);
    { user && setCoins(50) }

    console.log(coins);

    const CoinsContext = createContext();

    const logOut = () => {

        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    // user data

    const userData = {
        displayName: user && user?.displayName,
        photoURL: user && user?.photoURL,
        email: user && user?.email,
        coin: 50
    }

    console.log(userData)


    // user data

    const handleLogin = () => {
        signInWithGoogle()


    };

    const [dbUser, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    console.log(dbUser);



    // if(user != userData) {
    //     fetch('http://localhost:3000/user', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //         // authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    //     },
    //     body: JSON.stringify(userData)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data) {
    //             toast.success('Recipe added successfuly')
    //             // setCoins(newCoin);
    //             // reset()
    //         }
    //         else {
    //             toast.error('Failed to add Recipe')
    //         }
    //     })
    // }







    const menuItems = <>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/recipes'>Recipes</NavLink></li>
    </>
    return (

        <div className="navbar flex justify-between bg-base-100 text-[16px] lg:px-24 sticky top-0 z-10">
            <CoinsContext.Provider value={{ coins, setCoins }}>
                <div className="navbar">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                            {
                                user && <li><NavLink to='/add-recipe'>Add Recipes</NavLink></li>
                            }
                        </ul>
                    </div>
                    <NavLink className='text-2xl font-serif font-bold text-primary' to='/'>
                        <img width={90} src={image} alt="" />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-2">
                        {menuItems}
                        {
                            user && <>
                                <li><NavLink to='/add-recipe'>Add Recipes</NavLink></li>
                                <img className='w-[40px] h-[40px] rounded-full' src={user && user?.photoURL} alt="" />
                                <p className='text-2xl flex items-center bg-orange-50 px-[20px] rounded-full py-[6px]'><RiCoinsFill className='text-primary' /> <span className=''>{coins}</span> </p>
                            </>
                        }
                    </ul>
                </div>
                {
                    user ? <button onClick={() => logOut()} className='border border-primary text-primary rounded-full transition-all duration-700 ease-in-out py-2 px-8 hover:bg-primary hover:border-primary mx-2 hover:text-gray-100'>Logout</button> : <button onClick={() => handleLogin()} className='border border-primary text-primary rounded-full transition-all duration-700 ease-in-out py-2 px-8 hover:bg-primary hover:border-primary mx-2 hover:text-gray-100'>Login</button>
                }
            </CoinsContext.Provider>
        </div>
    );
};

export default Navbar;