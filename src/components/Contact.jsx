import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Have questions or want to get in touch? Fill out the form below or reach us through the provided contact information.
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-700">
              <strong>Address:</strong> 123 Environmental St, Green City, Earth
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> contact@environmentalorg.org
            </p>
            <div className="mt-4">
              <h4 className="text-xl font-bold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-green-600 hover:text-green-800">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" className="text-green-600 hover:text-green-800">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" className="text-green-600 hover:text-green-800">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
