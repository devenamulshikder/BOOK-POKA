import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" sticky z-50 top-0  bg-base-200">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start ">
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
          </div>
          <Link className="btn btn-ghost text-2xl font-extrabold work-sans">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex gap-10 text-lg items-center work-sans">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-success font-bold text-lg"
                  : "font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/readList"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-success font-bold text-lg"
                  : "font-bold"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pages-read"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-success font-bold text-lg"
                  : "font-bold"
              }
            >
              Pages to Read
            </NavLink>

            <NavLink
              to="/top-books"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-success font-bold text-lg"
                  : "font-bold"
              }
            >
              Famous Book List
            </NavLink>

            <NavLink
              to="/book-shop"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-success font-bold text-lg"
                  : "font-bold"
              }
            >
              Book Shop
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-3 work-sans">
          <a className="btn bg-[#23BE0A] text-white text-xl">Sign in</a>
          <a className="btn bg-[#59C6D2] text-white text-xl">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
