import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";

function Nav() {
  const { user, loggedOut } = useContext(authContext);
  const handleSignOut = () => {
    loggedOut();
  };
  const navLink = (
    <>
      <div className="flex gap-8 font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#BB1A17]" : "text-gray-800"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#BB1A17]" : "text-gray-800"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#BB1A17]" : "text-gray-800"
          }
          to="/career"
        >
          Career
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#BB1A17]" : "text-gray-800"
          }
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#BB1A17]" : "text-gray-800"
          }
          to="/register"
        >
          Register
        </NavLink>
      </div>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 my-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-10 mr-6 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="">
            {user ? (
              <button
                onClick={handleSignOut}
                className="btn bg-[#BB1A17] hover:bg-[#d23d3a] text-white"
              >
                LogOut
              </button>
            ) : (
              <Link
                to="/login"
                className="btn bg-[#BB1A17] hover:bg-[#d23d3a] text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
