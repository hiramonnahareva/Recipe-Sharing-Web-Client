import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../../Hooks/UseAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user);
    return (
        <div className="drawer drawer-mobile">
        <input id="sidebar-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col mt-10 items-center">
          {/* <!-- Page content here --> */}
               <h2 className='text-primary text-3xl font-semibold'>Dashboard</h2>
               <Outlet/>
        </div> 
        <div className="drawer-side">
          <label htmlFor="sidebar-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
           {
             !admin &&  <div>
               <li><Link to='/dashboard'>My Orders</Link></li>
             <li><Link to='/dashboard/addReviews'>Add a Review</Link></li>
             </div>
           }
            <li><Link to='/dashboard/profile'>My Profile</Link></li>
             {
              admin &&
               <div>
                <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
               <li><Link to='/dashboard/manageOrders'>Manage Orders</Link></li>
               <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                </div>
            } 
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;