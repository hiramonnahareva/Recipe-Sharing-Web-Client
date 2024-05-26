import { createBrowserRouter } from "react-router-dom";
// import Dashboard from "../layout/dashboard/Dashboard";
// import Main from "../layout/main/Main";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import AddRecipe from "../Pages/AddRecipe/AddRecipe";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";
import ProtectedRoute from "../Hooks/ProtectedRoute";
import Main from "../layout/Main/Main";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },

      {
        path: "/register",
        element: (
          <ProtectedRoute>
            <RecipeDetails />
            
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-recipe",
        element: (
            <ProtectedRoute>
            <AddRecipe/>
          </ProtectedRoute>
        ),
      },
    ],
  },
//   {
//     path: "/dashboard",
//     element: (
//       <PrivateRoute>
//         <Dashboard />
//       </PrivateRoute>
//     ),
//     children: [
//       {
//         path: "applied-jobs",
//         element: <AppliedJobs />,
//       },
//       {
//         path: "add-job",
//         element: <AddJob />,
//       },
//       {
//         path: "employer",
//         element: <EmployerDashboard />,
//       },
//       {
//         path: "candidate",
//         element: <CandidateDashboard />,
//       },
    // ],
//   },
]);

export default routes;