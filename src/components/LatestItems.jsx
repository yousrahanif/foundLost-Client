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
<h3 className="mt-2 text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-pulse drop-shadow-md">
    🔍 Latest Find & Lost Items 📦
</h3>


      {/* <h2 className='text-3xl text-center font-semibold '>Latest Find & Lost Items</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {latestItems.map((item) => (
          <div key={item._id} className="card bg-white shadow-md rounded-md p-4">
            <img
              src={item.thumbnail} 
              alt={item.thumbnail} 
              className="w-1/2 h-[250px] mx-auto object-cover rounded-md"
            />
            <div className="p-2 text-center">
              <h3 className="font-bold text-xl">Type: {item.postType}</h3>
              <p className="text-gray-700 text-sm">Date: {item.date}</p>
              <p className="text-gray-700 text-sm">Location: {item.location}</p>
              <p className="text-gray-700 text-sm">Description: {item.description}</p>
              <div className="mt-4">
                <Link
                  to={`/details/${item._id}`} 
                  className="text-white bg-gradient-to-r from-blue-300 via-blue-400 to-purple-300   hover:bg-blue-700 px-4 py-2 rounded"
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
<button className="text-white bg-gradient-to-r from-blue-300 via-blue-400 to-purple-300   hover:bg-blue-700 px-4 py-2 rounded mb-4">
See All

  </button>      </Link>
     </div>
    </section>
  );
};

export default LatestItems;
