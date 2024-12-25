// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import AllItemsCard from './AllItemsCard';

// const AllItems = () => {
//     const items= useLoaderData()
//     return (
//         <div className='mx-auto w-11/12'>
           
//            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'> 
//            {items.map(item=><AllItemsCard
//             key={item._id}
//             item={item}
//             >

//             </AllItemsCard>)}
//            </div>
//         </div>
//     );
// };

// export default AllItems;

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllItemsCard from './AllItemsCard';
import { Helmet } from 'react-helmet-async';

const AllItems = () => {
    const items = useLoaderData(); 
    const [searchQuery, setSearchQuery] = useState(''); 

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='mx-auto w-11/12 '>
             <Helmet>
                           <title>All Items - ReturnPoint</title>
                         </Helmet>
                   
            <div className="mb-4 flex items-center justify-center">
                <input 
                    type="text" 
                    placeholder="Search by title or location " 
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                    className="input input-bordered w-full max-w-xs" 
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
                {filteredItems.length === 0 ? (
                    <p>No items found matching your search criteria.</p>
                ) : (
                    filteredItems.map(item => (
                        <AllItemsCard
                            key={item._id}
                            item={item}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default AllItems;
