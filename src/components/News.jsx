import React from "react";
import { Link, useLocation, Route, Routes } from "react-router-dom";
import newsArticles from "../data/news.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsDetail from "./NewsDetail";

const MAX_SUMMARY_WORDS = 20;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      style={{
        display: "block",
        color: "green",
        right: "-60px",
        zIndex: 1,
        fontSize: "2rem",
        cursor: "pointer",
      }}
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
      style={{
        display: "block",
        color: "green",
        left: "-60px",
        zIndex: 1,
        fontSize: "2rem",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

const News = () => {
  const location = useLocation();
  const isNewsPath = location.pathname === "/naturenest/news";

  const shortenSummary = (summary) => {
    const words = summary.split(" ");
    if (words.length > MAX_SUMMARY_WORDS) {
      return words.slice(0, MAX_SUMMARY_WORDS).join(" ") + "...";
    }
    return summary;
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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <section id="news" className="py-8">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                News and Articles
              </h2>
              {isNewsPath ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {newsArticles.map((article) => (
                    <div
                      key={article.id}
                      className="bg-white p-4 shadow-lg rounded-lg"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover mb-4 rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {article.date}
                        </p>
                        <p className="text-gray-700 mb-4">
                          {shortenSummary(article.summary)}
                        </p>
                        <Link
                          to={`/naturenest/news/${article.id}`}
                          className="text-green-600 hover:text-green-800"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <Slider {...sliderSettings}>
                  {newsArticles.map((article) => (
                    <div key={article.id} className="px-2">
                      <div className="bg-gray-200 p-4 shadow-lg rounded-lg">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover mb-4 rounded-t-lg"
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-bold mb-2">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {article.date}
                          </p>
                          <p className="text-gray-700 mb-4">
                            {shortenSummary(article.summary)}
                          </p>
                          <Link
                            to={`/naturenest/news/${article.id}`}
                            className="text-green-600 hover:text-green-800"
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </section>
        }
      />
      <Route path="/:id" element={<NewsDetail />} />
    </Routes>
  );
};

export default News;
