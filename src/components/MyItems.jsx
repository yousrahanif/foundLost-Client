import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const MyItems = () => {
    const { user, loading } = useContext(AuthContext); // Get user info from context
    const [items, setItems] = useState([]); // Store the user's posts


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://lost-found-server-site.vercel.app/myPost/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                        // Update items state to remove the deleted item
                        setItems(prevItems =>
                            prevItems.filter(item => item._id !== _id)
                        );
                    }
                });
            }
        });
    };
    
    useEffect(() => {
        if (user && user.email) {
            fetch(`https://lost-found-server-site.vercel.app/myPost?email=${user.email}`)
                .then((response) => response.json())
                .then((data) => setItems(data))
                .catch((error) => console.error('Error fetching posts:', error));

            // axios.get(`https://lost-found-server-site.vercel.app/myPost?email=${user.email}`, {
            //     withCredentials: true,
            //   })
            //   .then((res) => setItems(res.data))
            //   .catch((error) => console.error('Error:', error));

                
        }
    }, [user]);

    if (loading) {
        return (
            <div>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (!user) {
        return (
            <div>
                <div role="alert" className="alert alert-warning">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Warning: Invalid email address!</span>
                </div>
            </div>
        );
    }

    return (
        <div>
              <Helmet>
                               <title>My Items - ReturnPoint</title>
                             </Helmet>
            <h1 className="text-3xl font-bold text-center p-4">My Items</h1>

            <div className='flex justify-center mb-4'>
                {items.length === 0 ? (
                    <div role="alert" className="alert alert-warning">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>No Items found for this user!</span>
                    </div>
                ) : (
                    <div className='overflow-x-auto'>
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Title</th>
                                    <th>Type</th>
                                    
                                    <th>Description</th>
                                    <th>Posted By</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item._id}>
                                        <td>
                                            <img src={item.thumbnail} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.postType}</td>
                                       
                                        <td>{item.description}</td>
                                        <td>{item.name}</td>
                                        <td>
                                        <NavLink to={`/allItems/${item._id}`} className="btn btn-sm btn-warning mr-2">Update</NavLink>
                                        <button  onClick={() => handleDelete(item._id)} className="btn btn-sm btn-error">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyItems;
