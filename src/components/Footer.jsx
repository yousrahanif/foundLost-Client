// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//     return (
//         <div>
//             <footer className="footer footer-center bg-gradient-to-r from-blue-100 via-blue-200 to-purple-100   sticky top-0 z-50 shadow-md text-blue-700 text-base-content font-bold rounded p-10">
//   <nav className="grid grid-flow-col gap-4">
//     <Link to="/aboutPage" className="link link-hover">About us</Link>
//     <Link to="/aboutPage" className="link link-hover">Contact</Link>
//     <Link to="/aboutPage" className="link link-hover">Jobs</Link>
//     <Link to="/aboutPage" className="link link-hover">Press kit</Link>
//   </nav>
//   <nav>
//     <div className="grid grid-flow-col gap-4">
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current">
//           <path
//             d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//         </svg>
//       </a>
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current">
//           <path
//             d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//         </svg>
//       </a>
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current">
//           <path
//             d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//         </svg>
//       </a>
//     </div>
//   </nav>
//   <aside>
//     <p>Copyright © {new Date().getFullYear()} - All right reserved by Lost and Found Industries Ltd</p>
//   </aside>
// </footer>
//         </div>
//     );
// };

// export default Footer;
// //



import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-gradient-to-r from-blue-100 via-blue-200 to-purple-100 sticky top-0 z-50 shadow-md text-blue-700 text-base-content font-bold rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/aboutPage" className="link link-hover">About us</Link>
          <Link to="/aboutPage" className="link link-hover">Contact</Link>
          <Link to="/aboutPage" className="link link-hover">Jobs</Link>
          <Link to="/aboutPage" className="link link-hover">Press kit</Link>
        </nav>

        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-blue-400 transition">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.732 0-4.945 2.21-4.945 4.942 0 .388.045.764.127 1.124-4.106-.205-7.748-2.173-10.19-5.164a4.902 4.902 0 00-.666 2.482c0 1.71.872 3.216 2.197 4.102A4.903 4.903 0 01.96 9.357v.063a4.943 4.943 0 003.96 4.834 4.902 4.902 0 01-2.224.084 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.104 2.104c-.396 0-.788-.023-1.175-.069A13.945 13.945 0 007.548 21c9.142 0 14.307-7.72 14.307-14.426 0-.22-.005-.438-.014-.654A10.24 10.24 0 0024 4.557z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-blue-600 transition">
                <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24h11.495V14.706H9.692V11.08h3.129V8.411c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.591l-.467 3.626h-3.124V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-pink-500 transition">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608C4.52 2.5 5.787 2.225 7.153 2.163 8.419 2.105 8.798 2.163 12 2.163zm0-2.163C8.741 0 8.332.01 7.052.07 5.77.13 4.663.392 3.735 1.32 2.807 2.248 2.545 3.355 2.485 4.637 2.425 5.917 2.415 6.326 2.415 12s.01 6.083.07 7.363c.06 1.282.322 2.389 1.25 3.317.928.928 2.035 1.19 3.317 1.25 1.28.06 1.689.07 7.363.07s6.083-.01 7.363-.07c1.282-.06 2.389-.322 3.317-1.25.928-.928 1.19-2.035 1.25-3.317.06-1.28.07-1.689.07-7.363s-.01-6.083-.07-7.363c-.06-1.282-.322-2.389-1.25-3.317C20.389.392 19.282.13 18 .07 16.719.01 16.31 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-blue-500 transition">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.759 0 5-2.24 5-5v-14c0-2.76-2.241-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75 0-.965.784-1.749 1.75-1.749s1.75.784 1.75 1.749c0 .966-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.336-.027-3.055-1.865-3.055-1.865 0-2.15 1.454-2.15 2.955v5.704h-3v-10h2.881v1.366h.041c.401-.76 1.379-1.561 2.839-1.561 3.036 0 3.6 2 3.6 4.6v5.595z" />
              </svg>
            </a>
          </div>
        </nav>

        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by Lost and Found Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
