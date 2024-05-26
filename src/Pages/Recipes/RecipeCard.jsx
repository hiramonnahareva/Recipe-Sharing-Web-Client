import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import swal from "sweetalert";
import { useCoins } from "../Shared/CoinContext";

const RecipeCard = ({ recipe }) => {
    const { _id, name, img, creatorEmail, country } = recipe;


    const { coins, setCoins } = useCoins(0);


    const user = useAuthState(auth)
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (data) => {


        const newCoin = (coins - 10);

        if (!user) {
            swal({
                title: "Please Login!",
                text: "You need to login for add recipe.",
                icon: "warning",
                dangerMode: true,
            })


        }
        if (creatorEmail) {
            const from = location.state?.from?.data || `${data}`;

            navigate(from, { replace: true });
        }

        if (!creatorEmail && user) {
            swal({
                title: "Pay 10 coin for see details!",
                text: "You need to login for add recipe.",
                icon: "warning",
                dangerMode: true,
            }).then(willDelete => {
                if (coins > 10) {
                    setCoins(newCoin)
                    console.log(coins)
                    const from = location.state?.from?.data || `${data}`;

                    navigate(from, { replace: true });
                } else {
                    swal("Not Egough Coin!");
                }
            });









        }


    }

    return (
        <div className={'p-5 text-center mx-4 mt-5 mb-5 px-8 shadow-lg'}>
            {
                recipe &&
                <>
                    <h1 className='text-2xl pt-5 font-bold pb-4'>{name}</h1>
                    <div className='h-36 flex justify-center overflow-hidden'>
                        <img className='w-full' src={img} alt="" />
                    </div>
                    <div className="flex flex-wrap justify-evenly">
                        <p>purchased_by</p>
                        <p>{country}</p>
                        <p>{creatorEmail}</p>
                    </div>

                    <button onClick={() => handleClick(`/recipe/${_id}`)} className='border  hover:text-primary rounded-full transition-all duration-700 ease-in-out py-2 px-8 my-[20px] bg-primary hover:bg-gray-100 hover:border-primary mx-2 text-gray-100'>View The Recipe</button>

                </>
            }

        </div>
    );
};

export default RecipeCard;