// import React from 'react';
// import { Link } from 'react-router-dom';

// const AllItemsCard = ({item}) => {
//     return (
//         <div>
//             <div className="card bg-base-100 w-96 shadow-xl">
//   <figure className="px-10 pt-10">
//     <img
//       src={item.thumbnail}
//       alt="Shoes"
//       className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">Post Type: {item.postType}!</h2>
//    <p>Title: {item.title}</p>
//    <p>Location: {item.location}</p>
//     <p>Description: {item.description}</p>
//     <p>Category: {item.category}</p>
//     <div className="card-actions">
//       <Link to={`/details/${item._id}`}  className="btn btn-primary">Details Page</Link>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default AllItemsCard;


import React from 'react';
import { Link } from 'react-router-dom';

const AllItemsCard = ({ item }) => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-96 h-[450px] shadow-xl flex flex-col justify-between p-4">
        {/* Image Section */}
        <figure className="px-10 pt-10 h-[350px]">
          <img
            src={item.thumbnail}
            alt="Item"
            className="rounded-xl h-[150px] w-[150px]"
          />
        </figure>
        
        {/* Content Section */}
        <div className="card-body items-center text-center flex-grow">
          <h2 className="card-title">Post Type: {item.postType}!</h2>
          <p><strong>📝 Title:</strong> {item.title}</p>
<p><strong>📍 Location:</strong> {item.location}</p>
<p><strong>🖋️ Description:</strong> {item.description}</p>
<p><strong>🏷️ Category:</strong> {item.category}</p>
<p><strong>📅 Date:</strong> {item.date}</p>



        </div>
        
        {/* Button Section */}
        <div className="card-actions mb-4 flex justify-center">
          <Link to={`/details/${item._id}`} className="btn bg-gradient-to-r from-blue-300 via-blue-400 to-purple-300  text-white ">
            Details Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllItemsCard;
