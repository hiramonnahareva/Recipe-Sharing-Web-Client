import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Layout = ({ children }) => {
    return (
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Layout;