

const Blogs = () => {
    return (
        <div className="flex justify-center my-20">
        <div className="card w-[60%] bg-accent shadow-xl">
        <div className="card-body">
        <h2 className='text-2xl'>How will you improve the performance of a React Application?</h2>
            <p>A lot of methods, used to optimize the performance of React, have been substituted by simpler techniques and commands.The majority of React.js developers, including us, use Chrome Dev tools and React developers tools. These instruments help evaluate the performance of the web project and optimize its performance.
            </p>
            
           </div>

            <div className='card-body'>
                <h2 className='text-2xl'>What are the different ways to manage a state in a React application?</h2>
                There are four main types of state you need to properly manage in your React apps: Local state,Global state, Server state, URL state.
                1.Local (UI) state: Local state is data we manage in one or another component.
                2.Global (UI) state: Global state is data we manage across multiple components.
                3. Server state:Data that comes from an external server that must be integrated with our UI state.
                4. URL state : Data that exists on our URLs, including the pathname and query parameters.
            </div>
            <div className='card-body'>
               <h2 className='text-2xl'>How does prototypical inheritance work?</h2>
               <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. Whenever I create a new object it's prototype gets a copy of the Object’s prototype from which it is being created, unless otherwise it is specified that it shouldn't.So when I refer to any property of a child Object and if the property doesn't exist on the child, JavaScript will look up the “prototype-chain” to find that particular property’s existence. This is how inheritance is implemented in JavaScript. </p>
                </div>
            <div className='card-body'>
            <h2 className='text-2xl'>Why you do not set the state directly in React?</h2>
                State updates in React are asynchronous; when an update is requested, there is no guarantee that the updates will be made immediately.If I update it directly, calling the setState() afterward may just replace the update I made. When I directly update the state, it does not change this.
                </div>

            {/* <div className='card-body'>
            <h2 className='text-2xl'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            For Exmple: const productsArray = [
                {"name: product1"}, {"price: 200"}, {"description: text"},
                {"name: product2"}, {"price: 200"}, {"description: text"},
                {"name: product2"}, {"price: 200"}, {"description: text"},
                
            ] 

          const name = productsArray.map(product => {
               product.name
           }))


                </div>
            */}


            <div className='card-body'>
            <h2 className='text-2xl'>What is a unit test? Why should write unit tests?</h2>
            Unit testing is a type of software testing where individual units or software components are tested.Unit testing ensures that all code meets quality standards before it's deployed. Unit tests save time and money.Usually, we tend to test the happy path more than the unhappy path.Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
            </div>
        </div>
        </div>
    );
};

export default Blogs;