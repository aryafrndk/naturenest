import React from "react";
import { useParams, Link } from "react-router-dom";
import newsArticles from "../data/news.js";

const NewsDetail = () => {
  const { id } = useParams();
  const article = newsArticles.find((article) => article.id === parseInt(id));

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <section id="news-detail" className="py-8">
      <div className="container mx-auto">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover mb-4 rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{article.date}</p>
            <p className="text-gray-700 mb-4 break-words whitespace-pre-line">{article.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
