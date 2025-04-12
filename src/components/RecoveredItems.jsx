// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../providers/AuthProvider';
// import Swal from 'sweetalert2';


// const RecoveredItems = () => {
//     const { user, loading } = useContext(AuthContext); // Get user info from context
//     const [recoveredItems, setRecoveredItems] = useState([]); // Store the user's recovered items

  
    
//     useEffect(() => {
//         if (user && user.email) {
//             // Fetch recovered items associated with the logged-in user's email
//             fetch(`https://lost-found-server-site.vercel.app/allRecovered?email=${user.email}`)
//                 .then((response) => response.json())
//                 .then((data) => setRecoveredItems(data))
//                 .catch((error) => console.error('Error fetching recovered items:', error));
//         }
//     }, [user]);

//     if (loading) {
//         return (
//             <div>
//                 <span className="loading loading-bars loading-lg"></span>
//             </div>
//         );
//     }

//     if (!user) {
//         return (
//             <div>
//                 <div role="alert" className="alert alert-warning">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6 shrink-0 stroke-current"
//                         fill="none"
//                         viewBox="0 0 24 24">
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                     </svg>
//                     <span>Warning: Invalid email address!</span>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <h1 className="text-3xl font-bold text-center p-4">My Recovered Items</h1>

//             <div className='flex justify-center mb-4'>
//                 {recoveredItems.length === 0 ? (
//                     <div role="alert" className="alert alert-warning">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6 shrink-0 stroke-current"
//                             fill="none"
//                             viewBox="0 0 24 24">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                         </svg>
//                         <span>No recovered items found for this user!</span>
//                     </div>
//                 ) : (
//                     <div className='overflow-x-auto'>
//                         <table className="table table-zebra w-full">
//                             <thead>
//                                 <tr>
                                
//                                     <th>Recover Date</th>
//                                     <th>Location</th>
//                                     <th>Name</th>
//                                     <th>Email</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {recoveredItems.map((item) => (
//                                     <tr key={item._id}>
                                       
//                                         <td>{item.recoveredDate}</td>
//                                         <td>{item.location}</td>
//                                         <td>{item.userName}</td>
//                                         <td>{item.userEmail}</td>
                                        
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default RecoveredItems;



import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FaTh, FaTable } from 'react-icons/fa'; 
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const RecoveredItems = () => {
    const { user, loading } = useContext(AuthContext); 
    const [recoveredItems, setRecoveredItems] = useState([]); 
    const [isGridLayout, setIsGridLayout] = useState(true); 
    useEffect(() => {
        if (user && user.email) {

            fetch(`https://lost-found-server-site.vercel.app/allRecovered?email=${user.email}`)
                .then((response) => response.json())
                .then((data) => setRecoveredItems(data))
                .catch((error) => console.error('Error fetching recovered items:', error));
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

    const toggleLayout = () => {
        setIsGridLayout(!isGridLayout);
    };

    return (
        <div>
              <Helmet>
                               <title>Recovered Items - ReturnPoint</title>
                             </Helmet>
                             <h1 className="mt-2 text-4xl font-light text-center mb-6 text-blue-500  bg-clip-text  drop-shadow-md">
  My Recovered Items
</h1>

            <div className="flex justify-between mb-4">

</div>
<div className='flex items-center gap-2 justify-center'>
<button
    onClick={toggleLayout}
    className="btn bg-gradient-to-r from-blue-300 via-blue-400 to-purple-300   ">
    {isGridLayout ? <FaTable /> : <FaTh />}
    <span>{isGridLayout ? 'Table View' : 'Grid View'}</span>
  </button>
</div>


            <div className='flex justify-center mb-4'>
                {recoveredItems.length === 0 ? (
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
                        <span>No recovered items found for this user!</span>
                    </div>
                ) : (
                    isGridLayout ? (
                        // Grid Layout
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {recoveredItems.map((item) => (
                                <div key={item._id} className="card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{item.userName}</h2>
                                        <p><strong>Recovered Date:</strong> {item.recoveredDate}</p>
                                        <p><strong>Location:</strong> {item.location}</p>
                                        <p><strong>Email:</strong> {item.userEmail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                  
                        <div className='overflow-x-auto'>
                            <table className="table table-zebra w-full">
                                <thead>
                                    <tr>
                                        <th>Recover Date</th>
                                        <th>Location</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recoveredItems.map((item) => (
                                        <tr key={item._id}>
                                            <td>{item.recoveredDate}</td>
                                            <td>{item.location}</td>
                                            <td>{item.userName}</td>
                                            <td>{item.userEmail}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default RecoveredItems;
