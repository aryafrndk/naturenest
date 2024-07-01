import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/naturenest/" className="text-4xl font-bold text-white">NatureNest</Link>
        
        {/* Menu for desktop */}
        <ul className="hidden md:flex space-x-6 font-bold text-xl">
          <li><Link to="/naturenest/" className="text-white">Home</Link></li>
          <li><Link to="/naturenest/news" className="text-white">News</Link></li>
          <li><Link to="/naturenest/projects" className="text-white">Projects</Link></li>
          <li><Link to="/naturenest/events" className="text-white">Events</Link></li>
          <li><Link to="/naturenest/donate" className="text-white">Donate</Link></li>
          <li><Link to="/naturenest/volunteer" className="text-white">Volunteer</Link></li>
          <li><Link to="/naturenest/contact" className="text-white">Contact</Link></li>
        </ul>

        {/* Burger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          <>
            <button
              onClick={toggleMenu}
              className="fixed top-4 right-4 text-white focus:outline-none z-50"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="fixed top-0 right-0 h-full w-1/4 bg-green-600 bg-opacity-95 z-40 flex justify-center items-center">
              <ul className="flex flex-col space-y-8 text-center text-xl w-full">
                <li><Link to="/naturenest/" className="text-white" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/naturenest/news" className="text-white" onClick={toggleMenu}>News</Link></li>
                <li><Link to="/naturenest/projects" className="text-white" onClick={toggleMenu}>Projects</Link></li>
                <li><Link to="/naturenest/events" className="text-white" onClick={toggleMenu}>Events</Link></li>
                <li><Link to="/naturenest/donate" className="text-white" onClick={toggleMenu}>Donate</Link></li>
                <li><Link to="/naturenest/volunteer" className="text-white" onClick={toggleMenu}>Volunteer</Link></li>
                <li><Link to="/naturenest/contact" className="text-white" onClick={toggleMenu}>Contact</Link></li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
