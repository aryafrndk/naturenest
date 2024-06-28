import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faDesktop, faBus } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Education and Training</h2>
        <p className="text-lg text-gray-700 mb-4">
          Explore our educational programs and training opportunities to learn about sustainable practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Workshops</h3>
            <p className="text-gray-700 mb-4">
              Join our workshops to gain practical knowledge and skills in sustainable farming, eco-friendly practices, and more.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              <Link to="">
                Learn More
              </Link>
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FontAwesomeIcon icon={faDesktop} className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Online Courses</h3>
            <p className="text-gray-700 mb-4">
              Enroll in our online courses covering topics such as environmental conservation, renewable energy, and biodiversity.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              <Link to="">
                Explore Courses
              </Link>
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FontAwesomeIcon icon={faBus} className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Field Trips</h3>
            <p className="text-gray-700 mb-4">
              Arrange educational field trips for schools or groups to learn about local ecosystems and conservation efforts.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              <Link to="">
                Plan a Trip
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
