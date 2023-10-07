import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../custom hooks/UseAuth";

const Navbar = () => {
  const { user, userSignOut } = UseAuth();
  // navlink
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? " text-red-600 underline" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      
      <NavLink
        className={({ isActive }) =>
          isActive ? " text-red-600 underline" : ""
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? " text-red-600 underline" : ""
        }
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? " text-red-600 underline" : ""
        }
        to="/about"
      >
        About Us
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? " text-red-600 underline" : ""
        }
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? " text-red-600 underline" : ""
        }
        to="/member"
      >
        Membership
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div>
            <img
              className="-ml-3"
              src="https://i.ibb.co/fN5YCtP/title2.png"
              alt=""
            />
          </div>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 text-xl">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-between" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={userSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="btn" to="/register">
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
