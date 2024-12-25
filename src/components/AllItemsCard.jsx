import React from 'react';
import { Link } from 'react-router-dom';

const AllItemsCard = ({item}) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={item.thumbnail}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Post Type: {item.postType}!</h2>
   <p>Title: {item.title}</p>
   <p>Location: {item.location}</p>
    <p>Description: {item.description}</p>
    <p>Category: {item.category}</p>
    <div className="card-actions">
      <Link to={`/details/${item._id}`}  className="btn btn-primary">Details Page</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllItemsCard;