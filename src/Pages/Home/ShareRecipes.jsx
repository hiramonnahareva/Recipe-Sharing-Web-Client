import { Link } from 'react-router-dom';
import image from '../../asset/shareRecipeBanner.png'

const ShareRecipes = () => {
    return (
        <div>

            <div className='flex justify-center my-20'>
                <div className="card w-[80%] h-[350px] bg-primary text-gray-100 relative mx-5">
                        <img className='w-[550px] absolute bottom-[-120px]' src={image} alt="" />
                    <div className="card-body absolute flex items-center justify-center text-center lg:mt-[40px] lg:right-56 right-[30px]">
                        <h1 className="text-5xl">Share your <br /> special Recipe</h1>
                        <span className='text-2xl my-2 text-black'>Earn Coin Now! </span>
                        <div className="card-actions">
                            <div>
                            <Link to="/add-recipe"><button className="btn bg-black border border-black hover:text-black transition-all duration-700 ease-in-out rounded-full text-gray-100 lg:px-10">Add Recipes</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareRecipes;