import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { useState } from 'react';

const SuccessStory = () => {
    const [counterOn, setCounterOn] = useState(false);
    const summary = [
        { _id: 1, countStart: '0', countEnd: '1000', countSpan: '+', info: 'Recipes' },
        { _id: 2, countStart: '0', countEnd: '20', countSpan: 'M+', info: 'Users' },
    ]
    return (
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className="lg:p-40 py-40 px-[20px] lg:flex justify-around items-center">
            <div className='flex flex-col lg:items-start items-center lg:mb-0 mb-20'>
                    <h1 className="text-6xl">Success Story <br /> <span className="text-primary">Recipe Hero</span></h1>
                    <p className="py-4 text-gray-800">Find a variety of recipes here and earn <br /> coins by adding your own!</p>
                    <ul className="custom-bullets">
                        <li> Get 1000+ Recipes</li>
                        <li>Earn Coins</li>
                        <li>Online Services Available</li>
                    </ul>
                    <div className='my-[5px]'>
                    <p>&quot;Discovering your recipes was a game-changer. Healthy, delicious meals are now a breeze!&quot; </p>
                    <p className=''>- Lisa, Fitness Trainer</p>
                    </div>
                </div>
                <div className="flex justify-center gap-[25px]">
                    {
                        summary.map(summary => <div className='flex flex-col justify-center items-center' key={summary._id}>
                            <div className="border-[10px] w-[150px] h-[150px] border-primary flex items-center justify-center rounded-full ">
                                {counterOn && <CountUp className='text-4xl' start={summary.countStart} end={summary.countEnd} duration={2} delay={0} />
                                }
                                <span className="text-[25px] text-center">{summary.countSpan}</span>
                            </div>
                                <span className="text-[25px] text-center">{summary.info}</span>

                        </div>
                        )
                    }
                </div>
        </div>
            </ScrollTrigger>
    );
};

export default SuccessStory;