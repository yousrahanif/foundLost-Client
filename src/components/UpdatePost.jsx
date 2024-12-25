import React, { useContext, useState } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { AuthContext } from '../providers/AuthProvider';

const UpdatePost = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const items = useLoaderData(); // Loaded data from the route loader

  // Initialize state from loader data
  const [post, setPost] = useState(items || {});
  const [date, setDate] = useState(new Date(post.date || Date.now()));

  const handleUpdatePost = (event) => {
    event.preventDefault();
    const form = event.target;

    // Collect form values
    const updatedPost = {
      postType: form.postType.value,
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      location: form.location.value,
      date: format(date, 'yyyy-MM-dd'),
      email: user.email,
      name: user.displayName,
      thumbnail: form.thumbnail.value,
    };

    // Update the post via the API
    fetch(`https://lost-found-server-site.vercel.app/updatePost/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Post Updated Successfully',
            icon: 'success',
          });
          navigate('/myItems'); 
        }
      })
      .catch((error) => console.error('Error updating post:', error));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Update Item</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleUpdatePost} className="card-body" encType="multipart/form-data">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Post Type</span>
              </label>
              <select
                name="postType"
                className="select select-bordered w-full max-w-xs"
                defaultValue={post.postType}
                required
              >
                <option disabled>Choose One</option>
                <option>Lost</option>
                <option>Found</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Thumbnail Url</span>
              </label>
              <input
                type="url"
                name="thumbnail"
                className="file-input file-input-bordered"
                placeholder="Image URL"
                defaultValue={post.thumbnail}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered"
                defaultValue={post.title}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered"
                defaultValue={post.description}
                required
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered w-full max-w-xs"
                defaultValue={post.category}
                required
              >
                <option disabled>Choose One</option>
                <option>Pets</option>
                <option>Documents</option>
                <option>Gadgets</option>
                <option>Others</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location where the item was lost or found"
                className="input input-bordered"
                defaultValue={post.location}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Date Lost or Found</span>
              </label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="yyyy-MM-dd"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user?.email || ''}
                name="email"
                className="input input-bordered"
                readOnly
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName || ''}
                name="name"
                className="input input-bordered"
                readOnly
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;


//https://lost-found-server-site.vercel.app