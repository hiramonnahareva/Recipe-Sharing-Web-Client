import { Link } from 'react-router-dom';
import image from '../../asset/coins.png'

const AddCoins = () => {

    

    return (
        
            <div className='flex justify-center my-20'>
                <div className="card w-[80%] h-[350px] bg-[#fff5f1] mx-5 overflow-hidden">
                    <div className="flex lg:flex-row flex-col-reverse items-center justify-center mx-16">
                        <div className='lg:flex-1 w-full'>
                            <h1 className="lg:text-5xl text-[28px] font-semibold mb-5">Purchase Your Coin <br /> Now!</h1>
                                <div>
                                    <Link to="/purchaseCoin"><button className="btn bg-black border border-black hover:text-black transition-all hover:bg-primary duration-700 ease-in-out rounded-full text-gray-100 lg:px-10">Purchase</button></Link>
                                </div>
                        </div>
                        <div className='lg:flex-1 w-full mx-auto'>
                            <img className=' w-[75%] ps-10' src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div> 
    );
};

export default AddCoins;