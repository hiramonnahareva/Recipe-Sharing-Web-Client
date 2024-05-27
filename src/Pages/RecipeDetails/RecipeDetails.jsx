import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import RecipeCard from "../Recipes/RecipeCard";


const RecipeDetails = () => {
    const { id } = useParams();
    
    const [Recipes, setRecipes] = useState([]);
    const categories = ['Chicken Recipe', 'Supe Recipe', 'Dessert Recipe', 'Spice Recipe', 'Cake Recipe', 'Pickle Recipe'];
    const [selectedCategory, setSelectedCategory] = useState([]);

    const {_id, name, img, details, videoLink, category} = Recipes;

    const [AllRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        fetch('https://recipe-sharing-web-server.onrender.com/recipes')
            .then(res => res.json())
            .then(data => setAllRecipes(data))
            
    }, [])
    

    useEffect(() => {
        fetch(`https://recipe-sharing-web-server.onrender.com/recipe/${id}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [id]);


  AllRecipes.filter(recipe => (recipe.category) === category )

    return (
        <div className='p-5 text-center mx-4 lg:mx-96 mt-5 mb-5 px-8 shadow-lg '>
            <h1 className='text-2xl pt-5 font-bold pb-4'>{name}</h1>
            <div className='h-64 flex justify-center overflow-hidden'>
            <img className='w-full' src={img} alt="" />
            </div>
            <p className="my-[20px] text-justify">{details}</p>
            <ReactPlayer
        url={videoLink}
        controls={true}
        width="100%"
        height="auto"
      />
      <div>

      {/* {
                Recipes.length ?
                    <div className='bg-white lg:mx-20 py-5'>
                        <div>
                            <div className="grid lg:grid-cols-3">
                                {
                                  filterCategory && filterCategory?.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>

                                )
                                }
                            </div>
                        </div>
                    </div> : <Loading></Loading>
            } */}
      </div>
        </div>
    );
};

export default RecipeDetails;