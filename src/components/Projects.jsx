import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import allProjects from '../data/projects.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const location = useLocation();
  const isProjectsPath = location.pathname === '/projects';
  const projectsToShow = isProjectsPath ? allProjects : allProjects.slice(0, 3);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  if (isProjectsPath) {
    return (
      <section id="projects" className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectsToShow.map((project) => (
              <div key={project.id} className="bg-white p-4 shadow-lg rounded-lg">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4 rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{project.date}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link to={`/projects/${project.id}`} className="text-green-600 hover:text-green-800">
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="projects" className="py-8">
        <div className="container mx-auto relative">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Projects</h2>
          <Slider {...sliderSettings}>
            {projectsToShow.map((project) => (
              <div key={project.id} className="px-2">
                <div className="bg-gray-200 p-4 shadow-lg rounded-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover mb-4 rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{project.date}</p>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <Link to={`/projects/${project.id}`} className="text-green-600 hover:text-green-800">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      style={{ display: 'block', color: 'green', right: '-40px', zIndex: 1, fontSize: '2rem', cursor: 'pointer' }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      style={{ display: 'block', color: 'green', left: '-40px', zIndex: 1, fontSize: '2rem', cursor: 'pointer' }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

export default Projects;
