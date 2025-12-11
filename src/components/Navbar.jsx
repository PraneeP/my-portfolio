import React from 'react'; // 👈 บรรทัดนี้สำคัญมาก! ห้ามลืม
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) => 
    isActive 
      ? "text-teal-600 font-bold" 
      : "text-slate-600 hover:text-teal-600 transition font-medium";

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">
      <nav className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg border border-slate-100 flex items-center gap-8 md:gap-10">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/portfolio" className={linkClass}>Project</NavLink>
        <NavLink to="/about" className={linkClass}>About Me</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;