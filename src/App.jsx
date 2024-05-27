
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import AddRecipe from "./Pages/AddRecipe/AddRecipe";
import Recipes from "./Pages/Recipes/Recipes";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails";
import ProtectedRoute from "./Hooks/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CoinsProvider } from "./Pages/Shared/CoinContext";
import PurchaseCoins from "./Pages/Payment/Purchase";


const App = () => {
  

  return (
    <div className="">
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
      <Route path='/purchaseCoin' element={
        <ProtectedRoute>
          <PurchaseCoins/>
        </ProtectedRoute>
      }></Route>
    </Routes>
    </CoinsProvider>
    <ToastContainer/>
    </div>
  );
};

export default App;