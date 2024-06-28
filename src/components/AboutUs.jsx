import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to protect the environment and promote sustainable practices.
          We believe in the power of community action and education to create lasting change.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/3 p-4">
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To create a world where humans live in harmony with nature, ensuring the health and well-being of all living creatures.
            </p>
          </div>
          <div className="md:w-1/3 p-4">
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To engage and educate individuals and communities in sustainable practices and environmental stewardship through various programs and initiatives.
            </p>
          </div>
          <div className="md:w-1/3 p-4">
            <h3 className="text-2xl font-bold mb-2">Our Values</h3>
            <p className="text-gray-700">
              We value respect for nature, community involvement, education, and the importance of every individual's contribution to a healthier planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
