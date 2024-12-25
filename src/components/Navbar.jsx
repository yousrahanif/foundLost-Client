
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState('light');

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // User signed out successfully
      })
      .catch((error) => {
        // Handle error
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/addItems">Add Lost & Found Item</NavLink>
      </li>
      <li>
        <NavLink to="/allItems">All Items</NavLink>
      </li>
      <li>
        <NavLink to="/recoveredItems">All Recovered Items</NavLink>
      </li>
      <li>
        <NavLink to="/myItems">Manage My Items</NavLink>
      </li>
      {user && (
      <li>
        <button onClick={handleSignOut}>Sign Out</button>
      </li>
    )}
    </>
  );

  return (
    <div className="mx-auto w-11/12">
      <div className="text-right m-4">
        <input
          onClick={handleToggleTheme}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
      </div>
      <div className="navbar bg-base-100 relative z-10">
     
        <div className="navbar-start">
          <div className="dropdown relative">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <NavLink to="/" className="text-xl font-bold ml-4">
            FundTogether
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <img
                id="photoUrlId"
                src={user.photoURL || 'https://i.ibb.co/kSMdsjQ/website.jpg'}
                alt="User Avatar"
                className="w-12 h-12 rounded-full cursor-pointer"
              />
              <Tooltip anchorId="photoUrlId" place="top">
                {user?.displayName || 'Anonymous'}
              </Tooltip>
              <div className="dropdown dropdown-end">
                <button tabIndex={0} className="btn btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-base-100 rounded-box mt-3 w-48 p-2 shadow"
                >
                  {navLinks}
                </ul>
              </div>
            </div>
          ) : (
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
