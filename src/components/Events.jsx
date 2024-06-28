import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import events from '../data/events.js';

const MAX_DESCRIPTION_WORDS = 30;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      style={{ display: 'block', color:'green', right: '-60px', zIndex: 1, fontSize: '2rem', cursor: 'pointer' }}
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
      style={{ display: 'block', color:'green', left: '-60px', zIndex: 1, fontSize: '2rem', cursor: 'pointer' }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

const Events = () => {
  const location = useLocation();
  const isEventsPath = location.pathname === '/naturenest/events';

  const shortenDescription = (description) => {
    const words = description.split(' ');
    if (words.length > MAX_DESCRIPTION_WORDS) {
      return words.slice(0, MAX_DESCRIPTION_WORDS).join(' ') + '...';
    }
    return description;
  };

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

  if (isEventsPath) {
    return (
      <section id="events" className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <div key={event.id} className="bg-white p-4 shadow-lg rounded-lg">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover mb-4 rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                  <p className="text-gray-700 mb-4">{shortenDescription(event.description)}</p>
                  <Link
                    to={`/events/${event.id}`}
                    className="text-green-600 hover:text-green-800"
                  >
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
      <section id="events" className="py-8">
        <div className="container mx-auto relative">
          <h2 className="text-3xl font-bold mb-4 text-center">Upcoming Events</h2>
          <Slider {...sliderSettings}>
            {events.map((event) => (
              <div key={event.id} className="px-2">
                <div className="bg-gray-200 p-4 shadow-lg rounded-lg">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-48 object-cover mb-4 rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                    <p className="text-gray-700 mb-4">{shortenDescription(event.description)}</p>
                    <Link
                      to={`/events/${event.id}`}
                      className="text-green-600 hover:text-green-800"
                    >
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

export default Events;
