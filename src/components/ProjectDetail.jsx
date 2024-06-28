import React from 'react';
import { useParams } from 'react-router-dom';
import newsArticles from '../data/news.js';

const NewsDetail = () => {
  const { id } = useParams();
  const article = newsArticles.find(article => article.id === parseInt(id));

  if (!article) {
    return <p>Article not found</p>;
  }

  // Handling line breaks in summary
  const summaryWithLineBreaks = article.summary.split('\n').map((item, key) => {
    return <React.Fragment key={key}>{item}<br /></React.Fragment>;
  });

  return (
    <div className="container mx-auto py-8 h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
        <img src={article.image} alt={article.title} className="w-full h-80 object-cover mb-4" />
        <p className="text-sm text-gray-600 mb-4">{article.date}</p>
        <p className="text-gray-700 mb-4">{article.content}</p>
        <p className="text-gray-700 mb-4">{summaryWithLineBreaks}</p>
      </div>
    </div>
  );
};

export default NewsDetail;
