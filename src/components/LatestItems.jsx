import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

const LatestItems = () => {
  const [latestItems, setLatestItems] = useState([]);

  useEffect(() => {
    fetch('https://lost-found-server-site.vercel.app/latestItems') 
      .then((response) => response.json()) 
      .then((data) => setLatestItems(data)) 
      .catch((error) => console.error('Error fetching items:', error)); 
  }, []); 

  return (
    <section>
      <h2 className='text-3xl text-center font-semibold '>Latest Find & Lost Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {latestItems.map((item) => (
          <div key={item._id} className="card bg-white shadow-md rounded-md p-4">
            <img
              src={item.thumbnail} 
              alt={item.thumbnail} 
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="p-2">
              <h3 className="font-bold text-xl">Type: {item.postType}</h3>
              <p className="text-gray-700 text-sm">Date: {item.date}</p>
              <p className="text-gray-700 text-sm">Location: {item.location}</p>
              <p className="text-gray-700 text-sm">Description: {item.description}</p>
              <div className="mt-4">
                <Link
                  to={`/details/${item._id}`} 
                  className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
  
     <div className='flex justify-center items-center'>
     <Link
        to="/allItems" 
        className="mt-4 inline-block text-blue-600 hover:underline font-extrabold"
      >
        See All
      </Link>
     </div>
    </section>
  );
};

export default LatestItems;
