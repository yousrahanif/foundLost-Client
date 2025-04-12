import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { Helmet } from 'react-helmet-async';

const AddPost = () => {
    const { user } = useContext(AuthContext);
    const [date, setDate] = useState(new Date());
  
    const handleAddPost = (event) => {
      event.preventDefault();
      const form = event.target;
      const postType = form.postType.value;
      const title = form.title.value;
      const description = form.description.value;
      const category = form.category.value;
      const location = form.location.value;
      const email = user.email;
      const name = user.displayName;
      const thumbnail=form.thumbnail.value;
  
      const formattedDate = format(date, 'yyyy-MM-dd');
      const newPost = {
        postType,
        title,
        description,
        category,
        location,
        date: formattedDate,
        email,
        name,
        thumbnail,
      };
  
  
      fetch("https://lost-found-server-site.vercel.app/items", {
        method: "POST",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newPost)
       })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Post Added Successfully",
              icon: "success",
            });
            form.reset();
            setDate(new Date());
          }
        });
    };
  
    return (
      <div className="hero bg-base-200 min-h-screen">
       
       <Helmet>
               <title>Add Post - ReturnPoint</title>
             </Helmet>
       
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
          <h1 className="text-4xl font-light text-center  text-blue-500  bg-clip-text  drop-shadow-md">
  Add Post
</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleAddPost} className="card-body" encType="multipart/form-data">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Post Type</span>
                </label>
                <select name="postType" className="select select-bordered w-full max-w-xs" required>
                  <option disabled selected>
                    Choose One
                  </option>
                  <option>Lost</option>
                  <option>Found</option>
                </select>
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Url</span>
                </label>
                <input type="url" name="thumbnail" className="file-input file-input-bordered" placeholder='   image url' required />
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
                  required
                ></textarea>
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select name="category" className="select select-bordered w-full max-w-xs" required>
                  <option disabled selected>
                    Choose One
                  </option>
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
                  showPopperArrow={true}
                  required
                />
              </div>
  
              <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder={user?.email} name="email" className="input input-bordered" readOnly  />
        </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder={user?.displayName}
                  name="name"
                  className="input input-bordered"
                  readOnly
                />
              </div>
  
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-blue-300 via-blue-400 to-purple-300 text-white  ">Add Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
export default AddPost;