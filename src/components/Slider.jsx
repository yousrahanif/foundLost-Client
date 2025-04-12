
// import { Typewriter } from "react-simple-typewriter";

// import backgroundImage from '../assets/bluebg.jpg';


// import dog from '../assets/dog.png';
// import { Link } from "react-router-dom";

// const Slider = () => {
//   return (
//     <div className="flex items-center justify-center bg-gray-50">
//     <div className="grid grid-cols-12 items-center">
//       {/* Text Section */}
//       <div className="w-3/4 mx-auto  col-span-6 text-center">
//         <h1 className="text-3xl md:text-4xl font-bold text-blue-500
//         text-center p-4">
//           <Typewriter
//             words={['Lost or Found Something?']}
//             loop={Infinity}
//             cursor
//             cursorStyle="|"
//             typeSpeed={100}
//             deleteSpeed={50}
//             delaySpeed={1000}
//           />
//         </h1>
//         {/* text-indigo-600 mt-4 */}
//         {/* <p className="text-lg md:text-xl">
//           Welcome to <span className="text-blue-500 font-semibold">ReturnPoint</span>
//           , your go-to platform for reconnecting people with their belongings. Post, browse, and reunite with ease.
//         </p>
//         <ul className="text-base md:text-lg text-gray-700 mt-6 space-y-2">
//           <li className="text-blue-700 hover:text-purple-500 transition-all duration-300">
//             📂 <span className="font-medium">Easy Posting</span>
//           </li>
//           <li className="text-blue-700 hover:text-purple-500 transition-all duration-300">
//             📍 <span className="font-medium">Location Tracking</span>
//           </li>
//           <li className="text-blue-700 hover:text-purple-500 transition-all duration-300">
//             🔔 <span className="font-medium">Match Alerts</span>
//           </li>
//         </ul>
//         <p className="text-lg text-indigo-600 mt-6">
//           Let’s bring lost items back home.
//         </p> */}
//         <Link to="/addItems">
//           <button className="btn bg-blue-500 mt-10">
//             Browse!
//           </button>
//         </Link>
//       </div>
  
//       <div className="col-span-6 flex justify-center p-4">
//         <img
//           src={dog}
//           alt="Dog holding a lost item"
//           className="w-3/4 mx-auto p-4 rounded-lg shadow-lg"
//         />
//       </div>
//     </div>
//   </div>
  
//   );
// };

// export default Slider;


import { Typewriter } from "react-simple-typewriter";
import dog from '../assets/dog.png';
import backgroundImage from '../assets/background.jpg';
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // padding: '1rem 0'
      }}
    >
      <div className="grid grid-cols-12 items-center">
        {/* Text Section */}
        <div className="w-3/4 mx-auto col-span-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-500 text-center p-4">
            <Typewriter
              words={['Lost or Found Something?']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <Link to="/addItems">
            <button className="btn text-white bg-gradient-to-r from-blue-300 via-blue-400 to-purple-300 hover:bg-blue-700 px-6 py-3 rounded font-semibold transition-all duration-300">
              Browse!
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="col-span-6 flex justify-center p-4">
          <img
            src={dog}
            alt="Dog holding a lost item"
            className="w-3/4 mx-auto p-4 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;


