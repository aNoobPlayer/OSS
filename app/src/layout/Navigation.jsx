import {  NavLink } from 'react-router-dom';

export default function Navigation() {

  return (
    <nav className="sticky top-0 z-20 flex flex-col justify-center items-center px-16 py-8 w-full text-base text-white bg-red-400/95 backdrop-blur-sm max-md:px-5">
      <div className="flex flex-wrap gap-5 justify-between items-center ml-32 max-w-full w-[663px]">
        <div className="self-stretch my-auto font-semibold hover:text-red-100 transition-colors">
          <NavLink to="/" className={({ isActive }) =>
              isActive
                ? "font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-400 rounded-md px-2 py-1"
                : "font-normal focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-400 rounded-md px-2 py-1"
            }>
            Home
          </NavLink>
        </div>
        <div className="flex flex-col self-stretch my-auto whitespace-nowrap">
          <NavLink to="/Rooms"
            className={({ isActive }) =>
              isActive
                ? "font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-400 rounded-md px-2 py-1"
                : "font-normal focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-400 rounded-md px-2 py-1"
            }>
            Rooms
          </NavLink>
        </div>
        <div className="self-stretch my-auto hover:text-red-100 transition-colors">
          <NavLink to="/Facilities" className={({ isActive }) =>
              isActive
                ? "font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-400 rounded-md px-2 py-1"
                : "font-normal focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-400 rounded-md px-2 py-1"
            }>
            Facilities
          </NavLink>
        </div>
        <div className="self-stretch my-auto hover:text-red-100 transition-colors">
        <NavLink to="/Contact" className={({ isActive }) =>
              isActive
                ? "font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-400 rounded-md px-2 py-1"
                : "font-normal focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-400 rounded-md px-2 py-1"
            }>
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}