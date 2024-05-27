
import { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import RecipeCard from './RecipeCard';


const Recipes = () => {
    const [Recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://recipe-sharing-web-server.onrender.com/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    // const [searchTerm, setSearchTerm] = useState('');
    // let filterData = [];
    // const categories = ['All', 'Dessert', 'Breakfast', 'Lunch'];



    // const handleSearchChange = (event) => {
    //     setSearchTerm(event.target.value);
    // };



    // if(searchTerm != "") {

    //     filterData = Recipes.filter((recipe) =>
    //         recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    // }
    // else {

    //     filterData = Recipes
    // }
    // console.log(filterData);

    const categories = ['Chicken Recipe', 'Supe Recipe', 'Dessert Recipe', 'Spice Recipe', 'Cake Recipe', 'Pickle Recipe'];
    const countries = [
        'United States', 'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the', 'Cook Islands', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France, Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, Democratic People\'s Republic of', 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', 'Lao People\'s Democratic Republic', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia, The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint LUCIA', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia (Slovak Republic)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province of China', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Viet Nam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Serbia', 'Zambia', 'Zimbabwe'
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedCountry, setSelectedCountry] = useState('All');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }; 

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const filteredRecipes = Recipes.filter((recipe) => {
        return (
            (selectedCategory === 'All' || recipe.category === selectedCategory) &&
            (selectedCountry === 'All' || recipe.country === selectedCountry) &&
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='my-20 flex lg:flex-row flex-col gap-20'>

                <input
                    type="text"
                    placeholder="Search recipes"
                    className="input input-bordered w-full rounded-full max-w-xs"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <select value={selectedCountry} onChange={handleCountryChange}>
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>

            <h1 className='text-4xl mb-8'>ALL Recipe</h1>
            {
                Recipes.length ?
                    <div className='bg-white lg:mx-20 py-5'>
                        <div>
                            <div className="grid lg:grid-cols-3">
                                {
                                    filteredRecipes.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>

                                    )
                                }
                            </div>
                        </div>
                    </div> : <Loading></Loading>
            }
        </div>
    );
};

export default Recipes;