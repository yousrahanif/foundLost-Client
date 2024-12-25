// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const DetailsPage = () => {
//     const item = useLoaderData();

//     const buttonText = item.postType === 'Lost' ? 'Found This!' : item.postType === 'Found' ? 'This is Mine!' : '';

//     return (
//         <div className="w-10/12 mx-auto my-10 p-5 border rounded-lg shadow-lg">
//             <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//   <div className="modal-box">
//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click the button below to close</p>
//     <div className="modal-action">
//       <form method="dialog">
//         {/* if there is a button in form, it will close the modal */}
//         <button className="btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog>
//             <h1 className="text-2xl font-bold mb-4">Item Details</h1>
//             <img 
//                 src={item.thumbnail} 
//                 alt={item.title} 
//                 className="rounded-lg w-1/2 mx-auto mb-4" 
//             />
//             <div className="text-left">
//                 <p><strong>Post Type:</strong> {item.postType}</p>
//                 <p><strong>Title:</strong> {item.title}</p>
//                 <p><strong>Description:</strong> {item.description}</p>
//                 <p><strong>Category:</strong> {item.category}</p>
//                 <p><strong>Location:</strong> {item.location}</p>
//                 <p><strong>Date:</strong> {item.date}</p>
//             </div>
            
//             {buttonText && (
//                 <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full">
//                     {buttonText}
//                 </button>
//             )}
//         </div>
//     );
// };

// export default DetailsPage;



// import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { AuthContext } from '../providers/AuthProvider';

// const DetailsPage = () => {
//     const item = useLoaderData();

//     const {user}=useContext(AuthContext)
 

//     const buttonText = item.postType === 'Lost' ? 'Found This!' : item.postType === 'Found' ? 'This is Mine!' : '';

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic (e.g., save data, send to server)
//         alert('Information submitted!');
//     };

//     return (
//         <div className="w-10/12 mx-auto my-10 p-5 border rounded-lg shadow-lg">
//             {/* Modal */}
//             <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//                 <div className="modal-box">
//                     <h3 className="font-bold text-lg">Recovered Item Details</h3>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-4">
//                             <label htmlFor="location" className="block text-sm font-medium text-gray-700">Recovered Location</label>
//                             <input
//                                 type="text"
//                                 id="location"
//                                 name="location"
//                                 defaultValue={item.location}
//                                 className="mt-2 p-2 border rounded w-full"
//                                 placeholder="Where it was given/received"
//                                 required
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <label htmlFor="recoveredDate" className="block text-sm font-medium text-gray-700">Date Recovered</label>
//                             <DatePicker
//                                 selected={null}
//                                 onChange={(date) => console.log(date)} // You can save the date here
//                                 dateFormat="yyyy/MM/dd"
//                                 className="mt-2 p-2 border rounded w-full"
//                                 placeholderText="Select a date"
//                                 required
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <p><strong>Recovered By:</strong></p>
//                             <div className="flex items-center space-x-4">
//                                 <img src={user.image} alt="User" className="w-12 h-12 rounded-full" />
//                                 <div>
//                                     <p className="font-medium">{user.displayName}</p>
//                                     <p className="text-sm text-gray-600">{user.email}</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="modal-action">
//                             <button type="button" className="btn" onClick={() => document.getElementById('my_modal_5').close()}>
//                                 Close
//                             </button>
//                             <button type="submit" className="btn btn-primary">
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </dialog>

//             <h1 className="text-2xl font-bold mb-4">Item Details</h1>
//             <img 
//                 src={item.thumbnail} 
//                 alt={item.title} 
//                 className="rounded-lg w-1/2 mx-auto mb-4" 
//             />
//             <div className="text-left">
//                 <p><strong>Post Type:</strong> {item.postType}</p>
//                 <p><strong>Title:</strong> {item.title}</p>
//                 <p><strong>Description:</strong> {item.description}</p>
//                 <p><strong>Category:</strong> {item.category}</p>
//                 <p><strong>Location:</strong> {item.location}</p>
//                 <p><strong>Date:</strong> {item.date}</p>
//             </div>
            
//             {buttonText && (
//                 <button 
//                     onClick={() => document.getElementById('my_modal_5').showModal()} 
//                     className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full"
//                 >
//                     {buttonText}
//                 </button>
//             )}
//         </div>
//     );
// };

// export default DetailsPage;


// import React, { useState, useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { AuthContext } from '../providers/AuthProvider';

// const DetailsPage = () => {
//     const item = useLoaderData();
//     const { user } = useContext(AuthContext);

//     const [recoveredDate, setRecoveredDate] = useState(null);

//     const buttonText = item.postType === 'Lost' ? 'Found This!' : item.postType === 'Found' ? 'This is Mine!' : '';

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted with the following data:');
//         console.log('Recovered Location:', e.target.location.value);
//         console.log('Recovered Date:', recoveredDate);
//         console.log('Recovered By:', user);
//         alert('Information submitted!');
//     };

//     return (
//         <div className="w-10/12 mx-auto my-10 p-5 border rounded-lg shadow-lg">
//             {/* Modal */}
//             <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//                 <div className="modal-box">
//                     <h3 className="font-bold text-lg">Recovered Item Details</h3>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-4">
//                             <label htmlFor="location" className="block text-sm font-medium text-gray-700">Recovered Location</label>
//                             <input
//                                 type="text"
//                                 id="location"
//                                 name="location"
//                                 defaultValue={item.location}
//                                 className="mt-2 p-2 border rounded w-full"
//                                 placeholder="Where it was given/received"
//                                 required
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <label htmlFor="recoveredDate" className="block text-sm font-medium text-gray-700">Date Recovered</label>
//                             <DatePicker
//                                 selected={recoveredDate}
//                                 onChange={(date) => setRecoveredDate(date)}  // Update state with selected date
//                                 dateFormat="yyyy/MM/dd"
//                                 className="mt-2 p-2 border rounded w-full"
//                                 placeholderText="Select a date"
//                                 required
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <p><strong>Recovered By:</strong></p>
//                             <div className="flex items-center space-x-4">
//                                 <img src={user.image} alt="User" className="w-12 h-12 rounded-full" />
//                                 <div>
//                                     <p className="font-medium">{user.displayName}</p>
//                                     <p className="text-sm text-gray-600">{user.email}</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="modal-action">
//                             <button type="button" className="btn" onClick={() => document.getElementById('my_modal_5').close()}>
//                                 Close
//                             </button>
//                             <button type="submit" className="btn btn-primary">
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </dialog>

//             <h1 className="text-2xl font-bold mb-4">Item Details</h1>
//             <img 
//                 src={item.thumbnail} 
//                 alt={item.title} 
//                 className="rounded-lg w-1/2 mx-auto mb-4" 
//             />
//             <div className="text-left">
//                 <p><strong>Post Type:</strong> {item.postType}</p>
//                 <p><strong>Title:</strong> {item.title}</p>
//                 <p><strong>Description:</strong> {item.description}</p>
//                 <p><strong>Category:</strong> {item.category}</p>
//                 <p><strong>Location:</strong> {item.location}</p>
//                 <p><strong>Date:</strong> {item.date}</p>
//             </div>
            
//             {buttonText && (
//                 <button 
//                     onClick={() => document.getElementById('my_modal_5').showModal()} 
//                     className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full"
//                 >
//                     {buttonText}
//                 </button>
//             )}
//         </div>
//     );
// };

// export default DetailsPage;


import React, { useState, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const DetailsPage = () => {
    const item = useLoaderData();
    const { user } = useContext(AuthContext);
    const [recoveredDate, setRecoveredDate] = useState(null);

    const buttonText = item.postType === 'Lost' ? 'Found This!' : item.postType === 'Found' ? 'This is Mine!' : '';

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const location = form.location.value;
    //     const recoveredDateFormatted = recoveredDate ? recoveredDate.toISOString().split('T')[0] : ''; // Format date
    //     const newRecovery = {
    //         location,
    //         recoveredDate: recoveredDateFormatted,
    //         userEmail: user.email,
    //         userName: user.displayName,
    //         userImage: user.image,
    //         itemId: item._id 
    //     };
    
    //     fetch("https://lost-found-server-site.vercel.app/recoverItem", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(newRecovery),
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         if (data.success) {
    //             // Show success message
    //             Swal.fire({
    //                 title: "Success!",
    //                 text: "Recovery information submitted successfully",
    //                 icon: "success",
    //             }).then(() => {
    //                 // Close the modal after success
    //                 document.getElementById('my_modal_5').close();
    //             });
    //         } else {
    //             // Show error message
    //             Swal.fire({
    //                 title: "Error!",
    //                 text: "Something went wrong. Please try again.",
    //                 icon: "error",
    //             }).then(() => {
    //                 // Optionally close the modal or leave it open for retry
    //                 document.getElementById('my_modal_5').close();
    //             });
    //         }
    //     })
    //     .catch(() => {
    //         // Handle any error that occurs during the fetch request
    //         Swal.fire({
    //             title: "Error!",
    //             text: "Network error. Please try again.",
    //             icon: "error",
    //         }).then(() => {
    //             // Optionally close the modal
    //             document.getElementById('my_modal_5').close();
    //         });
    //     });
    // };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const recoveredDateFormatted = recoveredDate ? recoveredDate.toISOString().split('T')[0] : ''; // Format date
        const newRecovery = {
            location,
            recoveredDate: recoveredDateFormatted,
            userEmail: user.email,
            userName: user.displayName,
            userImage: user.image,
            itemId: item._id 
        };
    
        fetch("https://lost-found-server-site.vercel.app/recoverItem", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecovery),
        })
        .then((res) => res.json())
        .then((data) => {
            // Close the modal directly after successful data submission
            document.getElementById('my_modal_5').close();
        })
        .catch(() => {
            // Optionally handle errors, but still close the modal
            document.getElementById('my_modal_5').close();
        });
    };
    
    return (
        <div className="w-10/12 mx-auto my-10 p-5 border rounded-lg shadow-lg">
            {/* Modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" inert>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Recovered Item Details</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Recovered Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                defaultValue={item.location}
                                className="mt-2 p-2 border rounded w-full"
                                placeholder="Where it was given/received"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="recoveredDate" className="block text-sm font-medium text-gray-700">Date Recovered</label>
                            <DatePicker
                                selected={recoveredDate}
                                onChange={(date) => setRecoveredDate(date)}  // Update state with selected date
                                dateFormat="yyyy/MM/dd"
                                className="mt-2 p-2 border rounded w-full"
                                placeholderText="Select a date"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <p><strong>Recovered By:</strong></p>
                            <div className="flex items-center space-x-4">
                                <img src={user.image} alt="User" className="w-12 h-12 rounded-full" />
                                <div>
                                    <p className="font-medium">{user.displayName}</p>
                                    <p className="text-sm text-gray-600">{user.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-action">
                            <button type="button" className="btn" onClick={() => document.getElementById('my_modal_5').close()}>
                                Close
                            </button>
                            <button type="submit" className="btn btn-primary"  onClick={() => document.getElementById('my_modal_5').close()}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>

            <h1 className="text-2xl font-bold mb-4">Item Details</h1>
            <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="rounded-lg w-1/2 mx-auto mb-4" 
            />
            <div className="text-left">
                <p><strong>Post Type:</strong> {item.postType}</p>
                <p><strong>Title:</strong> {item.title}</p>
                <p><strong>Description:</strong> {item.description}</p>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>Date:</strong> {item.date}</p>
            </div>
            
            {buttonText && (
                <button 
                    onClick={() => {
                        document.getElementById('my_modal_5').showModal();
                        document.getElementById('my_modal_5').inert = false; // Ensure focusable elements are active in the modal
                    }} 
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full"
                >
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default DetailsPage;
