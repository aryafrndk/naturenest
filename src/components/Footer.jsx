import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 p-8 mt-8 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <p className="text-sm">
          NatureNest is dedicated to preserving the planet for future generations. We focus on various initiatives including tree planting, beach cleanups, and promoting renewable energy.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul>
            <li><a href="/naturenest/news" className="text-sm hover:text-green-300">News</a></li>
            <li><a href="/naturenest/about" className="text-sm hover:text-green-300">About Us</a></li>
            <li><a href="/naturenest/projects" className="text-sm hover:text-green-300">Projects</a></li>
            <li><a href="/naturenest/contact" className="text-sm hover:text-green-300">Contact Us</a></li>          
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Connect with Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-white mt-8">
        <p className="text-sm">&copy; 2024 NatureNest. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
