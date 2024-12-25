import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Root from "../components/Root";
import Register from "../components/Register";
import Login from "../components/Login";
import AddPost from "../components/AddPost";
import AllItems from "../components/AllItems";
import PrivateRoute from "./PrivateRoute";
import DetailsPage from "../components/DetailsPage";
import MyItems from "../components/MyItems";
import UpdatePost from "../components/UpdatePost";
import RecoveredItems from "../components/RecoveredItems";


const Router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
          element: <Home></Home>,
    
    
            },
            {
                path: "/register",
              element: <Register></Register>
        
                },
                {
                    path: "/login",
                  element: <Login></Login>
            
                    },
                    {
                      path: "/addItems",
                    element: <PrivateRoute>
                      <AddPost></AddPost>
                    </PrivateRoute>
              
                      },

                      {
                        path:'/allItems',
                        element: 
                          <AllItems></AllItems>,
                     
                        loader: ()=>fetch('https://lost-found-server-site.vercel.app/allItems')
      
                      },
                      {
                        path:'/details/:id',
                        element: <PrivateRoute>
                          <DetailsPage></DetailsPage>
                        </PrivateRoute>,
                        loader: ({ params }) => fetch(`https://lost-found-server-site.vercel.app/allItems/${params.id}`),

                      },
                      {
                        
                          path:'/myItems',
                          element: <PrivateRoute>
                           <MyItems></MyItems>
                          </PrivateRoute>,
                        
                      }, 
                      {
                        path:'/allItems/:id',
                        element: <PrivateRoute>
                         <UpdatePost></UpdatePost>
                        </PrivateRoute>,
loader: ({ params }) => fetch(`https://lost-found-server-site.vercel.app/allItems/${params.id}`),


                      },
                      {
                        path:'/recoveredItems',
                        element: <PrivateRoute>
                       <RecoveredItems></RecoveredItems>
                        </PrivateRoute>,


                      },

      ]
      
    },
  ]);
  export default Router;