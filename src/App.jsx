
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import AddRecipe from "./Pages/AddRecipe/AddRecipe";
import Recipes from "./Pages/Recipes/Recipes";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails";
import ProtectedRoute from "./Hooks/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CoinsProvider } from "./Pages/Shared/CoinContext";
import PurchaseCoins from "./Pages/Payment/Purchase";
import CheckoutForm from "./Pages/Payment/Payment";
// import { CoinsContext } from "./Pages/Shared/CoinContext";


const App = () => {
  // const CoinsContext = createContext();
  

  // const [open, setOpen] = useState(false)

  return (
    <div className="">
       {/* <CoinsContext> */}
       <CoinsProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/recipes' element={<Recipes />}></Route>

        <Route path='/add-recipe' element={
          <ProtectedRoute>
            <AddRecipe />
          </ProtectedRoute>
        }></Route>
        <Route path='/recipe/:id' element={
          <ProtectedRoute>
            <RecipeDetails/>
          </ProtectedRoute>
        }></Route>
        <Route path='/puchaseCoin' element={
          <ProtectedRoute>
            <PurchaseCoins/>
          </ProtectedRoute>
        }></Route>
        <Route path='/checkout' element={
          <ProtectedRoute>
            <CheckoutForm/>
          </ProtectedRoute>
        }></Route>
      </Routes>
      <Footer />
      </CoinsProvider>

      <ToastContainer/>
      {/* </CoinsContext> */}

    </div>
  );
};

export default App;