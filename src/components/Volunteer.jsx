import React from 'react';
import volunteerOpportunities from '../data/volunteer.js';

const Volunteer = () => {
  return (
    <section id="volunteer" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Volunteer Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {volunteerOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={opportunity.imageUrl}
                alt={opportunity.title}
                className="w-full h-48 object-cover mb-4 rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                <p className="text-gray-700 mb-4">{opportunity.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Requirements:</h4>
                  <p className="text-gray-700">{opportunity.requirements}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Benefits:</h4>
                  <p className="text-gray-700">{opportunity.benefits}</p>
                </div>
                <p className="text-gray-700 mb-4">Contact: {opportunity.contact}</p>
                <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
