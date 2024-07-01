import React from "react";
import { useParams, Link } from "react-router-dom";
import newsArticles from "../data/projects.js";

const ProjectDetail = () => {
  const { id } = useParams();
  const article = newsArticles.find((article) => article.id === parseInt(id));

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <section id="projects-detail" className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-64 sm:h-96 object-cover mb-4 rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl sm:text-3xl font-bold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{article.date}</p>
            <p className="text-sm sm:text-base text-gray-700 mb-4 break-words whitespace-pre-line">
              {article.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
