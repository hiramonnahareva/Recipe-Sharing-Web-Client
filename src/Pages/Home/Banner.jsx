import { Link } from "react-router-dom";

const Banner = () => {
    return (
  <div className="bg-banner bg-cover lg:left-20 lg:h-[600px] h-64 lg:p-20 p-[20px]">
    <div className="flex justify-center items-center h-full">
    <div className="lg:w-[60%] text-center">
    <h1 className="text-4xl lg:text-7xl font-bold text-primary"> Best Recipes and <br /> Earn Coins</h1>
    <p className="ld:py-8 py-4 text-[16px] lg:text-xl">Find the best recipes on this website and earn coins by <br /> sharing your own recipes. Join now!</p>
    <Link to="/recipes">
    <button className="btn btn-primary rounded-full text-gray-100 lg:px-10">See Recipes</button>
    </Link>
    <Link to="/add-recipe">
    <button className='border border-primary text-primary rounded-full transition-all duration-700 ease-in-out py-2 px-8 hover:bg-primary hover:border-primary mx-2 hover:text-gray-100'>Add Recipe</button>
    </Link>
    </div>
    </div>
  </div>
    );
};

export default Banner;