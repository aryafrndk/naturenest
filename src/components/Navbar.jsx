import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/naturenest/" className="text-xl font-bold text-white">NatureNest</Link>
        
        {/* Menu for desktop */}
        <ul className="hidden md:flex space-x-4">
          <li><Link to="naturenest/news" className="text-white">News</Link></li>
          <li><Link to="naturenest/projects" className="text-white">Projects</Link></li>
          <li><Link to="naturenest/events" className="text-white">Events</Link></li>
          <li><Link to="naturenest/donate" className="text-white">Donate</Link></li>
          <li><Link to="naturenest/volunteer" className="text-white">Volunteer</Link></li>
          <li><Link to="naturenest/contact" className="text-white">Contact</Link></li>
        </ul>

        {/* Burger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-green-600 w-48 py-2 rounded-lg shadow-lg">
            <ul className="flex flex-col space-y-2">
              <li><Link to="/news" className="text-white">News</Link></li>
              <li><Link to="/projects" className="text-white">Projects</Link></li>
              <li><Link to="/events" className="text-white">Events</Link></li>
              <li><Link to="/donate" className="text-white">Donate</Link></li>
              <li><Link to="/volunteer" className="text-white">Volunteer</Link></li>
              <li><Link to="/contact" className="text-white">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
