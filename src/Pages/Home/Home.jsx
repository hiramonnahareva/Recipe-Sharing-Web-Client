import AboutMe from './AboutMe';
import Banner from './Banner';
import ShareRecipes from './ShareRecipes';
import SuccessStory from './SuccessStory';
import AddCoins from './AddCoins';

const Home = () => {
    return (
        <div>
           <Banner/>
           <SuccessStory/>
           <AboutMe/>
           <ShareRecipes/>
           <AddCoins/>
        </div>
    );
};

export default Home;