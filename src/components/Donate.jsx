import React from 'react';

const Donate = () => {
  return (
    <section id="donate" className="bg-white py-16 overflow-y-auto">
      <div className="container mx-auto text-center text-black">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="text-left w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Support Our Cause</h2>
            <p className="text-lg mb-8 text-center">Your donation helps us make a difference.</p>
            <div className="flex justify-center">
              <button className="bg-green-600 text-white hover:bg-green-700 hover:text-white font-bold py-2 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                Donate Now
              </button>
            </div>
            {/* Content that may cause overflow */}
            <div className="h-96">
              {/* Example content */}
              <p className="mt-8 text-black text-center">
                Your generous donation allows us to continue our mission of protecting and preserving our environment.
                With your support, we can plant more trees, clean our beaches, and educate communities about sustainability.
                Together, we can make a positive impact on our planet's future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
